FROM node:16.14.0-alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install --force

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]