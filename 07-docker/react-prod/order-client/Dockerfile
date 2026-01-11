# Stage 1: Build React app
FROM node:22 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
# build app and store result in /app/build
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# copy react app into html folder where it can be served to web clients
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# run nginx in the foreground (so the container keeps running)
CMD ["nginx", "-g", "daemon off;"]