FROM node:16-alpine

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@11

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]
