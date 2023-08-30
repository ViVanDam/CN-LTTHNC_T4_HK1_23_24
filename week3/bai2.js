const express = require("express");

const app = express();

app.get("/department/:page", (req, res) => {
  const page = req.params.page;

  switch (page) {
    case "lecturer":
      const lecturerInfo = [
        {
          name: "Trần Thị Minh Khoa",
          email: "ttmk@iuh.edu.vn",
        },
        {
          name: "Đỗ Hà Phương",
          email: "dhp@iuh.edu.vn",
        },
      ];

      res.send(JSON.stringify(lecturerInfo));
      break;
    case "student":
      const studentInfo = [
        {
          name: "Vi Văn Đảm",
          studentId: "19484281",
        },
        {
          name: "Nguyễn Ngọc Như",
          studentId: "12323454",
        },
      ];

      res.send(JSON.stringify(studentInfo));
      break;
    default:
      res.status(404).send("Trang không tồn tại.");
      break;
  }
});

app.listen(3030, function () {
  console.log("Server of bai 2 listening on http://localhost:3030");
});
