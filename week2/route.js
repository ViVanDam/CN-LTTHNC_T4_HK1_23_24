const express = require("express");

const app = express();
// Define port number as 3000
const port = 3000;
// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get("/", function (req, res) {
  res.send("hello my home page");
});

app.get("/members", function (req, res) {
  res.send(
    "this is the infomations page about members of group develope this website"
  );
});

app.get("/idea", function (req, res) {
  res.send("This is a page that introduces website building ideas");
});

// Make the app listen on port 3000
app.listen(port, function () {
  console.log("Server listening on http://localhost:" + port);
});
