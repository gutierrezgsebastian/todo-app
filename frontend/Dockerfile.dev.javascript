FROM node:16-bullseye-slim

WORKDIR /code/usr/src/app/

COPY ./package.json ./package.json
RUN npm install
