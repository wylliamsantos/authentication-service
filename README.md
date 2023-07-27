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

There are three environment variables possible pointing to HOST, PORT and DATABASE for postgres configuration
- POSTGRES_HOST
- POSTGRES_PORT
- POSTGRES_DATABASE

```sh
docker run --name email-service -e POSTGRES_HOST=localhost -e POSTGRES_PORT=1026 -e POSTGRES_DATABASE=test_database -p 8080:8080 -d wylliamsantos/email-service
```

> Note 1: Image is pushed automatically to DockerHub when you make a release/tag on Git repository

```sh
127.0.0.1:8080
```

## Swagger

http://localhost:8080/swagger-ui/index.html#