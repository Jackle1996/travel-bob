# travel-bob

Bob is a traveler of time and space who uses this travel blog to tell the world about his epic quests and journeys to foreign planets, galaxies and dimensions.

## features
- todo :triangular_flag_on_post:


# Quick start: start the app with docker-compose

**1. Set mongoDB credentials as environment variables**:

For security reasons the database credentials have to be provided via environment variables.

```sh
# PowerShell:
$env:DB_USER="username"
$env:DB_PASS="password"

# Bash:
export DB_USER=user
export DB_PASS=password
```

**2. Run the app**:
```sh
# Build docker images:
docker-compose build --no-cache

# Start microservices, envoy proxy and frontend:
docker-compose up
```
Build the image with the `--no-cache` option to make sure the latest changes are included in the images.

## Alternative: using docker to start services

> If you feel slightly masochistic today.

```sh
# Build and run envoy proxy.
# No need to expose port 9090, 9091 or 9092
#  since the envoy proxy can access those ports via host.docker.internal
docker build -t travelbob/envoy -f .\envoy.Dockerfile --no-cache .
docker run -d -p 8080:8080 travelbob/envoy
```
```sh
# Build blog-service
docker build -t travelbob/blog-service -f .\blog.Dockerfile --no-cache .

# Run usig PowerShell:
docker run -d -p 9090:9090 -e DB_USER=$env:DB_USER -e DB_PASS=$env:DB_PASS travelbob/blog-service

# Run using Bash
docker run -d -p 9090:9090 -e DB_USER=$DB_USER -e DB_PASS=$DB_PASS travelbob/blog-service
```
```sh
# Build comment-service
docker build -t travelbob/comment-service -f .\comment.Dockerfile --no-cache .

# Run usig PowerShell:
docker run -d -p 9091:9091 -e DB_USER=$env:DB_USER -e DB_PASS=$env:DB_PASS travelbob/comment-service

# Run using Bash
docker run -d -p 9091:9091 -e DB_USER=$DB_USER -e DB_PASS=$DB_PASS travelbob/comment-service
```


# Technical information

The DB credentials are passed to the services via environment variables for security reasons.

## envoy proxy

gRPC uses some features of HTTP/2 that are not yet supported by modern browsers, that's why we need the envoy proxy.
The proxy listens on port `8080` for the frontend to send HTTP/1.1 gRPC calls. Those calls are then translated to HTTP/2 gRPC calls and forwarded to the correct service (as configured in the [envoy.yaml](https://github.com/Jackle1996/travel-bob/blob/master/envoy/envoy.yaml) config file).

## databases

This project uses a free instance of an [Atlas mongoDB cluster](https://www.mongodb.com/cloud). The connection string (excluding the user credentials) is hardcoded in the `DatabaseAccess.ts` file of each service. Each service has his own database in the cluster.

## blog-service

Exposes [blog API](https://github.com/Jackle1996/travel-bob/blob/master/protos/blogposts.proto) on port `9090`.

## comment-service

Exposes [comment API](https://github.com/Jackle1996/travel-bob/blob/master/protos/comments.proto) on port `9091`.

## user-service

TODO :triangular_flag_on_post:


# Development

## Generate Javascript & Typescript files based on Protobuf API (GRPC)
### Setup
1. Download protoc.exe [Get protoc releases here](https://github.com/protocolbuffers/protobuf/releases)
2. Download protoc-gen-grpc-web.exe [Get protoc-gen-grpc releases here](https://github.com/grpc/grpc-web/releases)
3. Make sure that protoc-gen-grpc-web.exe does not have any version info in its name. if it does, remove the version info by renaming the .exe file:
    - :heavy_check_mark: protoc-gen-grpc-web.exe
    - :x: protoc-gen-grpc-web-1.0.6-windows-x86_64.exe
4. Add protoc.exe and protoc-gen-grpc-web.exe to your PATH environment variable

### Generate gRPC-Web Code for Frontend
5. Navigate to folder ../travel-bob/ (project root folder)
6. Execute command:

```bash
protoc -I="./protos" ./protos/blogposts.proto --js_out=import_style=commonjs:./api/grpc-web-ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:./api/grpc-web-ts
```

### Generate gRPC code for backend services
5. Navigate to folder ../travel-bob/ (project root folder)
6. Execute:

```bash
npm i
npm i -g grpc-tools

grpc_tools_node_protoc -I="./protos" ./protos/blogposts.proto --plugin=protoc-gen-ts=$($(Get-Location).ToString())/node_modules/.bin/protoc-gen-ts.cmd --grpc_out=./api/grpc-ts --js_out=import_style=commonjs:./api/grpc-ts --ts_out=./api/grpc-ts
```

-----------------------------

## Usage Grpc Client
### Import
```ts
// import requests, replys and custom data types
import { Blog, Timestamp, AllBlogsRequest, AllBlogsReply } from '../../../protos/blogposts_pb';
// import client stub
import { BlogsClient } from '../../../protos/BlogpostsServiceClientPb';
```

### Create callbacks
```ts
getAllBlogsCallback(err: Error | null, response: AllBlogsReply) {
    this.blogs = response.getBlogsList();
}
```

### Create client
```ts
constructor() {
    const grpcClient: BlogsClient = new BlogsClient('127.0.0.1:53001');
    grpcClient.getAllBlogs(new AllBlogsRequest(), null, this.getAllBlogsCallback);
}
```

## Usage Grpc Server

see [blog-service implementation](https://github.com/Jackle1996/travel-bob/blob/master/blog-service/src/GrpcServer.ts) or [comment-service implementation](https://github.com/Jackle1996/travel-bob/blob/master/comment-service/src/GrpcServer.ts) for examples.