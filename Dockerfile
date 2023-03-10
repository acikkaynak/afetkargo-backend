FROM node:18-alpine

WORKDIR /app

COPY package.json /app/

COPY . /app/

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
