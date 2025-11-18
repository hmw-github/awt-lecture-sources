# Steps to build and run a demo web app in a NGINX container
- to build the image execute `docker build -t webapp .`
- to start NGINX on port 8080 execute `docker run -p 8888:80 webapp`
- now open your browser at http://localhost:8080 to view the webpage
  