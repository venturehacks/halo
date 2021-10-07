FROM node:14.17.5-alpine AS base
WORKDIR /app/

# 'silence' git-related build args to leverage cache
ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA ''

ARG GIT_BRANCH
ENV GIT_BRANCH ''

ARG GIT_COMMIT_MESSAGE
ENV GIT_COMMIT_MESSAGE ''

ARG TAG
ENV TAG=$TAG

RUN apk add --no-cache git python2 build-base libpng-dev pngquant lcms2-dev bash autoconf automake libtool \
  && apk add libimagequant-dev --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main \
  && apk add vips-dev --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

COPY package.json yarn.lock /app/
RUN yarn install || yarn install --network-concurrency 1

#####
##### BUILD
#####

FROM base AS build

COPY tsconfig.json tsconfig.test.json /app/
COPY --from=base /app/node_modules ./node_modules
# TODO(drew): sus copy whole app
COPY . /app/

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

ARG TAG
ENV TAG=$TAG

COPY --from=base /app/package.json ./package.json
COPY --from=base /app/yarn.lock ./yarn.lock
COPY --from=base /app/tsconfig.json ./tsconfig.json
COPY --from=base /app/tsconfig.test.json ./tsconfig.test.json
COPY --from=base /app/node_modules ./node_modules

CMD yarn test:ci
