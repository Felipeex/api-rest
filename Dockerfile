FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3333
CMD [ "npm", "start" ]