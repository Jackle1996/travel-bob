# travel-bob

Bob is a traveler of time and space who uses this travel blog to tell the world about his epic quests and journeys to foreign planets, galaxies and dimensions.


## Generate Javascript & Typescript files based on Protobuf API (GRPC)
protoc.exe [OPTIONS]

### Params for generating Javascript 
| params        | description  | 
| ----------------- |------------- | 
| --proto_path="DIR" | directory where the protobuf file is | 
| --js_out="DIR" | directory where the generated javascript files will be placed | 
| "protoFile | has no key=, but you need to tell protoc the file you want to use for code generation |

### Additional params for generating typscript 
| params        | description  
| ----------------- |------------- 
| --plugin="plugin" | a plugin which can be loaded by protoc.exe (like protoc-gen-ts.cmd) |
| --ts_out="DIR" | directory where the generated typescript files will be placed |

**!!! Due to a bug [issue #15](https://github.com/improbable-eng/ts-protoc-gen/issues/15) the path to the plugin has to be an absolute path!!!**

##### Full Command for Javascript only
protoc --proto_path="../travel-bob/protos" --js_out="../travel-bob/protos" "../travel-bob/protos/blogposts.proto"

##### Full Command for Javascript&Typescript
protoc --plugin=protoc-gen-ts="D:\Studium\WEBLAB\travel-bob\protos\node_modules\.bin\protoc-gen-ts.cmd" --proto_path="../travel-bob/protos" --js_out="../travel-bob/protos" --ts_out="../travel-bob/frontend/src/app/grpc_generated" "../travel-bob/protos/blogposts.proto"
