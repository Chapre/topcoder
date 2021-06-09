FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]

Especially for Angular submission we need include nginx.conf to expose the port 8080:

server {
  listen 8080;

  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri$args $uri$args/ $uri $uri/ /index.html =404;
  }
}