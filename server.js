const { PeerServer } = require("peer");

const server = PeerServer({
  port: process.env.PORT || 9000,
  path: "/",
  allow_discovery: false,
  alive_timeout: 60000,
  cleanup_out_msgs: 1000,
  concurrent_limit: 100,
});

server.on("connection", (client) => {
  console.log("connected:", client.getId());
});

server.on("disconnect", (client) => {
  console.log("disconnected:", client.getId());
});

console.log("PeerJS signal server running on port", process.env.PORT || 9000);
