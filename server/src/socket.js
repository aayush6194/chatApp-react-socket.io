module.exports = (server)=>{
  var socket = require("socket.io");
  var io = socket(server);

  io.on("connection", (socket)=>{
    console.log(`connected on ${socket.id}`);

    socket.on("message", (data)=>{
      io.sockets.emit("message", data);
    });
  })

};
