/*
* yea i power the website via express
* ik git will not use it but i need a 
* server on localhost
*/

const express = require("express");
const app = express();
const path = require("path");

const port = 80;

app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});