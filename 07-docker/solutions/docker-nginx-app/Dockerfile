# use Nginx Base Image
FROM nginx:alpine

# Maintainer Info (optional)
LABEL maintainer="your-email@example.com"
LABEL description="Simple nginx web application"

# Copy all static files to /usr/share/nginx/html
# This is the default directory for nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# expose port 80
EXPOSE 80

# Nginx runs in the foreground by default
# CMD is already defined in the base image