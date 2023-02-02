const Handler = require("./Handler");
const ChunkRadiusUpdate = require("../ChunkRadiusUpdate");

class RequestChunkRadius extends Handler {
  handle(client) {
    new ChunkRadiusUpdate().writePacket(client, 32);
  }
}

module.exports = RequestChunkRadius;
