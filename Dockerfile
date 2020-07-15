FROM node:10-alpine AS build

WORKDIR /app/

RUN apk add --no-cache git python2 build-base

COPY . /app/

RUN yarn install --production
RUN yarn build

CMD ["yarn", "test:ci"]

