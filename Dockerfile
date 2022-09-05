FROM openjdk:11-jdk-alpine

WORKDIR /root

COPY ./*.jar .

CMD ["java", "-jar", "ssg-0.0.1-SNAPSHOT.jar"]