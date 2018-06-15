const express = require("express");
var requests = require("./src/request");
var sockets = require("./src/socket");

var port = 3001 || process.env.PORT;
const app = express();

app.use(express.static("public"));
requests(app);

const server = app.listen(port, ()=>{console.log(`running on ${port}`); });
sockets(server);
