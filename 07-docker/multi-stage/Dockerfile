FROM alpine:latest AS builder
RUN apk add --update-cache cmake build-base &&  \
    rm -rf /var/cache/apk/*
WORKDIR /app
COPY . ./
RUN mkdir build && \
    cd build &&  \
    cmake .. &&  \
    make all
 
FROM alpine:latest
RUN apk add --update-cache libstdc++ && \
    rm -rf /var/cache/apk/*
WORKDIR /app
COPY --from=builder /app/build/cmake_hello ./app
CMD ["./app"]
