# Use Node.js base image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose Angular dev server port
EXPOSE 4200

# Run Angular in dev mode
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000", "--proxy-config", "./proxy.conf.docker.json"]