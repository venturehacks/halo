FROM node:10-alpine AS build
WORKDIR /app/
COPY . /app/
RUN yarn install
RUN yarn build
CMD ["yarn", "test"]
