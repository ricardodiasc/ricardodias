FROM node:12.6.0 as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
#EXPOSE 9000
CMD ["npm" ,"run", "serve"]


FROM nginx
WORKDIR /usr/share/nginx/html
EXPOSE 80
COPY --from=builder /usr/src/app/public .

