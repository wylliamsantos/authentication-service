# authentication-server

Project to do authentication generating jwt token.

## Frameworks and Tecnologies

All the project's dependencies are listed below:

- Java 19
- Spring Boot 3
- Lombok

## Installation

Project requires [Java 19](https://www.oracle.com/java/technologies/javase/jdk19-archive-downloads.html) to run.


Before install project, you need to export USERNAME_GITHUB and GPR_TOKEN variables used as environment variables in build.gradle to authenticate and download private libraries published in Github Packages.


```sh
export GPR_TOKEN=YOUR_YOKEN_HERE
export USERNAME_GITHUB=wylliamsantos
```

Install the dependencies and devDependencies and start the server.

```sh
./gradlew clean bootJar
```

## Docker

There are two environment variables possible pointing to HOST and PORT of your SMTP server
- MAIL_SERVER_HOST
- MAIL_SERVER_PORT

```sh
docker run --name email-service -e MAIL_SERVER_HOST=localhost -e MAIL_SERVER_PORT=1026 -p 8080:8080 -d wylliamsantos/email-service
```

> Note 1: Image is pushed automatically to DockerHub when you commit code using Github Actions.

```sh
127.0.0.1:8080
```

## Swagger

http://localhost:8080/swagger-ui/index.html#/email-api/send