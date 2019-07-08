FROM node:12.6.0

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build
EXPOSE 9000
CMD ["npm" ,"run", "serve"]

# FROM nginx

