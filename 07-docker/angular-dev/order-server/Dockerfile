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

# Expose port
EXPOSE 8080 9229

# Start the server 
CMD ["npm", "start"]