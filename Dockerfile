FROM node:14.17.5-alpine AS build
WORKDIR /app/
CMD ["yarn", "test:ci"]

RUN apk add --no-cache git python2 build-base libpng-dev pngquant lcms2-dev bash autoconf automake libtool

RUN apk add libimagequant-dev --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main
RUN apk add vips-dev --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

COPY tsconfig.json package.json yarn.lock /app/
RUN yarn install --network-timeout 1000000

COPY . /app/
RUN yarn install --network-timeout 1000000
RUN yarn build
