const express = require("express");
const app = express();
const server = require("https").createServer(app);
const io=require("socket.io").listen(server);
const port=3000;


io.on("connection", socket => {
        console.log("user connected");
});

server.listen(port , ()=> console.log("server running on port " + port));

