FROM node:14.17.5-alpine AS base
WORKDIR /app/

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

COPY package.json yarn.lock .yarnrc /app/

COPY jest.config.js stylelint.config.js tslint.json .prettierrc.js .prettierignore .scssrc.js .scss-lint.yml /app/

RUN yarn install || yarn install --network-concurrency 1

#####
##### BUILD
#####

FROM node:14.17.5-alpine AS build
WORKDIR /app/

# 'silence' git-related build args to leverage cache
ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA ''

ARG GIT_BRANCH
ENV GIT_BRANCH ''

ARG GIT_COMMIT_MESSAGE
ENV GIT_COMMIT_MESSAGE ''

# from base
COPY --from=base /app/package.json ./
COPY --from=base /app/yarn.lock ./
COPY --from=base /app/.yarnrc ./
COPY --from=base /app/node_modules ./node_modules

# configs
COPY tsconfig.json tsconfig.test.json rollup.config.babel.js babel.config.js ./

# sources
COPY src ./src
COPY scss ./scss

RUN yarn build

#####
##### TEST
#####

FROM node:14.17.5-alpine AS test

WORKDIR /app/

# 'silence' git-related build args to leverage cache
ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA ''

ARG GIT_BRANCH
ENV GIT_BRANCH ''

ARG GIT_COMMIT_MESSAGE
ENV GIT_COMMIT_MESSAGE ''

# from base
### configs
COPY --from=base jest.config.js ./
COPY --from=base stylelint.config.js ./
COPY --from=base tslint.json ./
COPY --from=base .prettierrc.js ./
COPY --from=base .scssrc.js ./
COPY --from=base .scss-lint.yml ./
### deps
COPY --from=base /app/package.json ./
COPY --from=base /app/yarn.lock ./
COPY --from=base /app/.yarnrc ./
COPY --from=base /app/node_modules ./node_modules


# from build
COPY --from=build /app/tsconfig.json ./
COPY --from=build /app/tsconfig.test.json ./
COPY --from=build /app/src ./src
COPY --from=build /app/scss ./scss

CMD yarn test:ci
