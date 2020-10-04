FROM node:14

LABEL org.opencontainers.image.source https://github.com/Samuel-Martineau/Smartineau.me

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 2903

CMD [ "yarn", "start" ]