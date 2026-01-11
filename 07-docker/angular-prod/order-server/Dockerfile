# Dockerfile for Node.js backend
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# compile TS -> JS to dist directory
RUN npx tsc

# Expose port
EXPOSE 8080

# Start the server 
CMD ["node", "dist/server.js"]