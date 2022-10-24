FROM node:18-alpine as build
WORKDIR /usr/src/microservice-data
ADD package*.json ./
RUN npm install
ADD . .
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/src/microservice-data
ADD package.json ./
RUN npm install --only=prod --legacy-peer-deps
COPY --from=build /usr/src/microservice-data/dist ./dist