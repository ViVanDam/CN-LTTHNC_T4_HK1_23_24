const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const imagePath = "./index.html";
  const imageBuffer = fs.readFileSync(imagePath);

  res.setHeader("Content-Type", "text/html");
  res.end(imageBuffer);
});

app.get("/calculate", (req, res) => {
  const operation = req.query.operation;
  const num1 = req.query.num1;
  const num2 = req.query.num2;
  // http//localhost:3000/calculate?operation=(add/plus/minus/divide)&num1=...&num2=...
  if (operation === "add") {
    const result = Number(num1) * Number(num2);
    res.send(`Kết quả của phép nhân là ${result}`);
  } else if (operation === "plus") {
    const result = Number(num1) + Number(num2);
    res.send(`Kết quả của phép nhân là ${result}`);
  } else if (operation === "minus") {
    const result = Number(num1) - Number(num2);
    res.send(`Kết quả của phép nhân là ${result}`);
  } else if (operation === "divide") {
    const result = Number(num1) / Number(num2);
    res.send(`Kết quả của phép nhân là ${result}`);
  }
});

app.listen(3000, () => console.log("Server started on port 3000"));
