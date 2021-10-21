FROM node:14.17.5-alpine AS base
# 'silence' git-related build args to leverage cache
ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA ''

ARG GIT_BRANCH
ENV GIT_BRANCH ''

ARG GIT_COMMIT_MESSAGE
ENV GIT_COMMIT_MESSAGE ''

RUN apk add --no-cache git python2 build-base libpng-dev pngquant lcms2-dev bash autoconf automake libtool \
  && apk add libimagequant-dev --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main \
  && apk add vips-dev --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

# 🌳 monorepo
WORKDIR /app/
COPY package.json yarn.lock .yarnrc ./

# 📦 packages/halo
COPY packages/halo/package.json ./packages/halo/

# 📦 packages/docs
# Documentation Site package (noop until we move out of netlify)
COPY packages/docs/package.json ./packages/docs/

RUN yarn workspace halo install || \
    yarn workspace halo install --network-concurrency 1

#####
##### BUILD
#####

FROM node:14.17.5-alpine AS build

# 'silence' git-related build args to leverage cache
ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA ''

ARG GIT_BRANCH
ENV GIT_BRANCH $GIT_BRANCH

ARG GIT_COMMIT_MESSAGE
ENV GIT_COMMIT_MESSAGE ''

# 🌳 monorepo
WORKDIR /app/
COPY tsconfig.base.json babel.config.js .eslintrc.js stylelint.config.js tslint.json .prettierrc.js .prettierignore ./
# from base
COPY --from=base /app/package.json /app/yarn.lock /app/.yarnrc ./
COPY --from=base /app/node_modules ./node_modules

# 📦 packages/halo
WORKDIR /app/packages/halo/
COPY packages/halo/*.json packages/halo/*.js ./
COPY packages/halo/test ./test
# from base
COPY --from=base /app/packages/halo/package.json ./
COPY --from=base /app/packages/halo/node_modules ./node_modules
# sources
COPY packages/halo/src ./src
COPY packages/halo/scss ./scss

RUN yarn build

#####
##### TEST
#####

FROM build AS test
WORKDIR /app/

# 'silence' git-related build args to leverage cache
ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA ''

ARG GIT_BRANCH
ENV GIT_BRANCH ''

ARG GIT_COMMIT_MESSAGE
ENV GIT_COMMIT_MESSAGE ''

CMD yarn test:ci
