FROM openjdk:11
ADD ./target/PdfExtractor-0.0.1-SNAPSHOT.jar /usr/src/PdfExtractor-0.0.1-SNAPSHOT.jar
EXPOSE 8091
WORKDIR usr/src
ENTRYPOINT ["java","-jar","PdfExtractor-0.0.1-SNAPSHOT.jar"]
