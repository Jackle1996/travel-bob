echo "Compiling blogposts.proto for grpc-web as typescript.."
protoc -I="./protos" ./protos/blogposts.proto --js_out=import_style=commonjs:./api/grpc-web-ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:./api/grpc-web-ts
echo "done"

echo "Compiling blogposts.proto for grpc as typescript.."
grpc_tools_node_protoc -I="./protos" ./protos/blogposts.proto --plugin=protoc-gen-ts=$($(Get-Location).ToString())/node_modules/.bin/protoc-gen-ts.cmd --grpc_out=./api/grpc-ts --js_out=import_style=commonjs:./api/grpc-ts --ts_out=./api/grpc-ts
echo "done"