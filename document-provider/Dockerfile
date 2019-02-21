FROM openjdk:11
ADD ./target/ontology-manager-service-0.0.1-SNAPSHOT.jar /usr/src/ontology-manager-service-0.0.1-SNAPSHOT.jar
EXPOSE 8080

VOLUME ./upload-dir usr/src/upload-dir
ENTRYPOINT ["java","-jar","ontology-manager-service-0.0.1-SNAPSHOT.jar"]
