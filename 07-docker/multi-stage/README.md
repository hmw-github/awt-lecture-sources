# Demo of a multi-stage Dockerfile

## Using normal dockerfiles for the two stages and a shell script (not recommended!)
- run `./build-all.sh` which uses the two dockerfiles `stage1.Dockerfile` and `stage2.Dockerfile`
- execute the resulting image containing the C++ application using `docker run thi/hello-world:latest`

## Using a multi-stage Dockerfile
- ./Dockerfile contains two stages to build the C++ application, only last stage is kept to start the app
- build with `docker build -t thi/hello-world:latest .`
- run with `docker run thi/hello-world:latest`
