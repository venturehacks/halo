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

COPY --from=base /app/node_modules ./
COPY tsconfig.json tsconfig.test.json rollup.config.babel.js babel.config.js ./
COPY src scss ./

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
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/yarn.lock ./yarn.lock
COPY --from=base /app/.yarnrc ./.yarnrc
COPY --from=base /app/node_modules ./node_modules

# from build
COPY --from=build /app/tsconfig.json ./tsconfig.json
COPY --from=build /app/tsconfig.test.json ./tsconfig.test.json

# configs
COPY jest.config.js stylelint.config.js tslint.json .prettierrc.js .prettierignore .scssrc.js .scss-lint.yml ./

CMD yarn test:ci
