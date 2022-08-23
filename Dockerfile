FROM node:12.20.0-alpine as build

WORKDIR /usr/app

COPY package.json package.json
RUN apk --no-cache add --virtual .deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  yarn install && \
  apk del .deps

RUN export NODE_OPTIONS="--max-old-space-size=7168"

COPY src/ src/
COPY angular.json package.json tsconfig.json ngsw-config.json ./

RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/app/public /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
