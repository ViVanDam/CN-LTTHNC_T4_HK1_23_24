const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const getTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return `Ngày/tháng/năm của hệ thống: ${day}/${month}/${year}`;
  };
  response.send(getTime());
});
// do đụng port nên em đổi sang port 3030 ạ
app.listen(3030, function () {
  console.log("Server of bai 1 listening on http://localhost:3030");
});
