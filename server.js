const express = require("express");
const path = require("path");
const mainPath = path.resolve("index.html");
const encodePath = path.resolve("encode.html");
const decodePath = path.resolve("decode.html");

const app = express();
const port = process.env.PORT || 4756;

app.get("/", (req, res) => {
  res.sendFile(mainPath);
});


app.get("/encode", (req, res) => {
  res.sendFile(encodePath);
});

app.get("/decode", (req, res) => {
  res.sendFile(decodePath);
});

app.use(express.static("main"));

app.use(express.static("encode"));

app.use(express.static("decode"));

app.listen(port, () => {
  console.log(`Running service at ${port}`);
});
