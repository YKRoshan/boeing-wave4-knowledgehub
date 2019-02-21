FROM openjdk:11
ADD ./target/document-provider-0.0.1-SNAPSHOT.jar /usr/src/document-provider-0.0.1-SNAPSHOT.jar
EXPOSE 8080
WORKDIR usr/src
VOLUME ./upload-dir usr/src/upload-dir
ENTRYPOINT ["java","-jar","document-provider-0.0.1-SNAPSHOT.jar"]
