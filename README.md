# travel-bob

Bob is a traveler of time and space who uses this travel blog to tell the world about his epic quests and journeys to foreign planets, galaxies and dimensions.

## start microservices
To avoid hardcoding the DB credentials they must be set as environment variables.

PowerShell:
```
PS > $env:DB_USER="username"
PS > $env:DB_PASS="password"
PS > npm run start
```

Bash:
```
$ DB_USER=user DB_PASS=password npm run start
```

### Setup and usage

Requirement: `npm install --save @types/node`

Usage (TS): `process.env['DB_USER']`

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
protoc --proto_path=./protos --js_out=import_style=commonjs:./protos --grpc-web_out=import_style=typescript,mode=grpcwebtext:./protos "./protos/blogposts.proto"
```
or (should do exactly the same)
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