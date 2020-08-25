const express = require("express");
const initSignaling = require('./signaling');
const http = require("http");

const app = express();
const port = 8000;
const server = http.createServer(app);
initSignaling(server);

app.use(express.static(__dirname + "/public"));

server.listen(port, () => console.log(`Server is running on port ${port}`));
