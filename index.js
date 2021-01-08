const express = require("express");
const port = process.env.port || 3000;
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const CSVFileValidator = require("csv-file-validator");

const app = express();

app.use(bodyParser.json());

app.listen(port, "127.0.0.1", () => {
  console.log(`Server Running On ${port}`);
});

app.get("/", (req, res) => {
  console.log("Hello World!");
  res.send("<h1>Hello World!</h1>");
})

app.post("/api", (req,res) => {
  fetch(req.body.csv.url)
    .then(res => res.text())
    .then((file) => {
      console.log(file);
    })
})