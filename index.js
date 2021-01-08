const express = require("express");
const port = process.env.port || 3000;

const app = express();
app.listen(port, "127.0.0.1", () => {
  console.log(`Server Running On ${port}`);
});

app.get("/", (req, res) => {
  console.log("Hello World!");
  res.send("<h1>Hello World!</h1>");
})