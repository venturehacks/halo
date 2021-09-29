FROM node:14.17.5-alpine AS build

WORKDIR /app/

RUN apk add --no-cache git python2 build-base libpng-dev pngquant

COPY ./package.json /app/

RUN yarn install

COPY . /app/

RUN yarn build

CMD ["yarn", "test:ci"]

