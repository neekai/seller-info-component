FROM node:carbon

RUN mkdir /app
ADD . /app
WORKDIR /app

COPY package*.json ./

RUN npm install --quiet

COPY . .