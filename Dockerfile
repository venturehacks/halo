FROM node:14.17.5-alpine AS build

WORKDIR /app/

RUN apk add --no-cache git python2 build-base

COPY . /app/

RUN yarn install
RUN yarn build

CMD ["yarn", "test:ci"]

