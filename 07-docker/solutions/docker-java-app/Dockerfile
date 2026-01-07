FROM eclipse-temurin:17-jdk

WORKDIR /app
COPY Hello.java .

# Compile
RUN javac -d /app/build ./Hello.java

# copy class file
#COPY /app/build/Hello.class .

# start Hello class
ENTRYPOINT ["java", "--class-path", "./build", "Hello"]
# enter optional commands
CMD [] 

