FROM node:12.6.0 as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
#EXPOSE 9000
CMD ["npm" ,"run", "serve"]


FROM nginx:1.17.1
WORKDIR /usr/share/nginx/html
EXPOSE 80
COPY --from=builder /usr/src/app/public .

