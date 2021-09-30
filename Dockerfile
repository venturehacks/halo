FROM node:14.17.5-alpine AS build
WORKDIR /app/
CMD ["yarn", "test:ci"]

RUN apk add --no-cache git python2 build-base libpng-dev pngquant lcms2-dev bash autoconf

COPY ./package.json /app/
RUN yarn install

COPY . /app/
RUN yarn build
