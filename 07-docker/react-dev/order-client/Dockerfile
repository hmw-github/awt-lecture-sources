# Dockerfile for React client development
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Start React development server
CMD ["npm", "start"]