# Dockerfile for Node.js backend
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# perform build (TS to JS into dist)
RUN npm run build

# Expose port
EXPOSE 8080

# Start the server
CMD ["node", "dist/server.js"]