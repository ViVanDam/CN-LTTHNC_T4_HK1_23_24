const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const imagePath = "./index.html";
  const imageBuffer = fs.readFileSync(imagePath);

  res.setHeader("Content-Type", "text/html");
  res.end(imageBuffer);
});

app.get("/images/bai2.png", (req, res) => {
  const imagePath = "./public/images/bai2.png";
  const imageBuffer = fs.readFileSync(imagePath);

  res.setHeader("Content-Type", "image/png");
  res.send(imageBuffer);
});

app.get("/index.html", (req, res) => {
  const imagePath = "./public/index.html";
  const imageBuffer = fs.readFileSync(imagePath);

  res.setHeader("Content-Type", "text/html");
  res.end(imageBuffer);
});

app.listen(3000, () => console.log("Server started on port 3000"));
