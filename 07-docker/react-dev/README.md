# Dockerized React App for Order Management - development

## Features and Usage

- uses order server from directory `order-server`
- React client app resides in directory `order-client`
- each subdirectory has its own `Dockerfile` to build an image
- Build, start and stop the system with docker compose based on `docker-compose.yml`
  - NGINX webserver is used with port 8181 => access UI through <http://localhost:8181>
  - NGINX forwards requests either to frontend or backend (see nginx.conf)
  - frontend service starts a react development server
  - backend service starts a NodeJS REST server