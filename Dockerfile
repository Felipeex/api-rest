FROM node:16-alpine

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm run build

COPY . .

EXPOSE 7777
CMD [ "npm", "start" ]