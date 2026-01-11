# Dockerized React App for Order Management - production version

## Features and Usage

- uses order server from directory `order-server`
- React client app resides in directory `order-client`
- each subdirectory has its own `Dockerfile` to build an image
- Build, start and stop the system with docker compose based on `docker-compose.yml`
  - NGINX webserver is used with port 8191 => access UI through <http://localhost:8191>
  - Frontend service is based on image which contains
    - nodeJS environment where React app is built in production mode
    - NGINX environment to run nginx webserver which serves static React App files
    - NGINX forwards requests backend (see nginx.conf)