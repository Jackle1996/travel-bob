# travel-bob

Bob is a traveler of time and space who uses this travel blog to tell the world about his epic quests and journeys to foreign planets, galaxies and dimensions.

## using docker to start services

Prequisites:
1. install [Docker](https://www.docker.com/products/docker-desktop)

### start envoy proxy

gRPC uses some features of HTTP/2 that are not yet supported by modern browsers, that's why we need the envoy proxy.
The envoy proxy translates the HTTP/1.1 calls from grpc-web to HTTP/2 grpc calls.

Build the image with the `--no-cache` option to make sure the latest version of `envoy.yaml` is used. Expose port `8080` for the frontend to send gRPC calls to the envoy proxy. No need to expose port `9090` since the envoy proxy can access this port via `host.docker.internal`.
1. `docker build -t travelbob/envoy -f .\envoy.Dockerfile --no-cache .`
2. `docker run -d -p 8080:8080 travelbob/envoy`

### start blog-service

Build the image with the `--no-cache` option to make sure the latest changes are included in the images. Expose port `9090` for the blog-service to listen on for gRPC requests. Also expose port `27017` to access the Atlas mongoDB cloud. The DB credentials are passed to the docker container as environment variables for security reasons.

PowerShell:
1. `docker build -t travelbob/blog-service -f .\blog.Dockerfile --no-cache .`
2. Set mongoDB credentials as environment variables: `$env:DB_USER="username"` and `$env:DB_PASS="password"`.
3. `docker run -d -p 9090:9090 -p 27017:27017 -e DB_USER=$env:DB_USER -e DB_PASS=$env:DB_PASS travelbob/blog-service`

Bash:
1. `docker build -t travelbob/blog-service -f .\blog.Dockerfile --no-cache .`
2. Set mongoDB credentials as environment variables: `DB_USER=user` and `DB_PASS=password`.
3. `docker run -d -p 9090:9090 -p 27017:27017 -e DB_USER=$DB_USER -e DB_PASS=$DB_PASS travelbob/blog-service`

### start comment-service

Same as blog-service but expose service on port `9091` instead.

PowerShell:
1. `docker build -t travelbob/comment-service -f .\comment.Dockerfile --no-cache .`
2. Set mongoDB credentials as environment variables: `$env:DB_USER="username"` and `$env:DB_PASS="password"`.
3. `docker run -d -p 9091:9091 -p 27017:27017 -e DB_USER=$env:DB_USER -e DB_PASS=$env:DB_PASS travelbob/comment-service`

Bash:
1. `docker build -t travelbob/comment-service -f .\comment.Dockerfile --no-cache .`
2. Set mongoDB credentials as environment variables: `DB_USER=user` and `DB_PASS=password`.
3. `docker run -d -p 9091:9091 -p 27017:27017 -e DB_USER=$DB_USER -e DB_PASS=$DB_PASS travelbob/comment-service`

-----------------------------

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

-----------------------------

## Usage Server
TODO




-----------------------------