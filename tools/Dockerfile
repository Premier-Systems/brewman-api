# Note. the docker context should be the parent folder.
# This uses custom build outputs https://docs.docker.com/engine/reference/commandline/build/#custom-build-outputs
# so needs an output specified on the command line.

####################
# GRPC NODE
####################

FROM node:slim AS node-client-stage

RUN apt update && apt install -y curl unzip

WORKDIR /protoc

# Manual protoc install - leaving here for reference but seems to be included in npm packages below
RUN curl --show-error --location https://github.com/protocolbuffers/protobuf/releases/download/v3.19.1/protoc-3.19.1-linux-x86_64.zip --output protoc.zip
RUN unzip protoc.zip
ENV PATH="/protoc/bin:${PATH}"

# These seem to distribute as an npm packages and include all the necessary binaries
RUN npm install -g grpc-tools@1.11.2 grpc_tools_node_protoc_ts@5.3.2

WORKDIR /src

COPY . .

# See https://www.npmjs.com/package/grpc_tools_node_protoc_ts
# Example https://github.com/agreatfool/grpc_tools_node_protoc_ts/blob/master/examples/bash/build.sh
RUN mkdir -p /src/generated/

RUN grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:/src/generated/ \
    --ts_out=grpc_js:/src/generated/ \
    --grpc_out=grpc_js:/src/generated/ \
    -I /src/protos \
      /src/protos/*.proto

# It seems to create unnecessary grpc files for dependencies if they are generated with grpc_out included
RUN grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:/src/generated/ \
    --ts_out=/src/generated/ \
    -I /src/protos \
      /src/protos/common/*.proto \
      /src/protos/google/protobuf/*.proto \
      /src/protos/google/type/*.proto

FROM scratch AS export-stage
COPY --from=node-client-stage /src/generated/ .