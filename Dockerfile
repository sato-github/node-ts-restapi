FROM node:12

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . . 

ENV PORT=8080

EXPOSE 8080 

CMD [ "yarn", "start" ]