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

## Generate Javascript & Typescript files based on Protobuf API (GRPC)
use node module [ts-protoc-gen](https://www.npmjs.com/package/ts-protoc-gen) and protoc.exe [OPTIONS]
[Get protoc releases here](https://github.com/protocolbuffers/protobuf/releases)

### Params for generating Javascript 
| params        | description  | 
| ----------------- |------------- | 
| --proto_path="DIR" | directory where the protobuf file is | 
| --js_out="DIR" | directory where the generated javascript files will be placed | 
| --js_out="**import_style=commonjs,binary:** DIR" | allows your generated typscript module to be imported as you would expect !!! | 
| "protoFile | has no key=, but you need to tell protoc the file you want to use for code generation |

### Additional params for generating typscript 
| params        | description  
| ----------------- |------------- 
| --plugin="plugin" | a plugin which can be loaded by protoc.exe (like protoc-gen-ts.cmd) |
| --ts_out="DIR" | directory where the generated typescript files will be placed |

**!!! Due to a bug [issue #15](https://github.com/improbable-eng/ts-protoc-gen/issues/15) the path to the plugin has to be an absolute path!!!**

##### Full Command for Javascript only
```
protoc --proto_path="../travel-bob/protos" --js_out="../travel-bob/protos" "../travel-bob/protos/blogposts.proto"
```

##### Full Command for Javascript&Typescript
```shell
cd /travel-bob/
./protos/node_modules/.bin/protoc-gen-grpc-ts.cmd --ts_out="service=true:./protos"  --proto_path="./protos"  "./protos/blogposts.proto"
``` 
