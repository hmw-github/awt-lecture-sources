# Build image
docker build -t java-hello-world .

## Start container (simple)
docker run java-hello-world

## Start container with arguments
docker run java-hello-world "Argument1" "Argument2"
