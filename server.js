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
    .then(file => {
      const selFields = req.body.csv.select_fields;
      let config = {
        headers: [],
        isHeaderNameOptional: false
      };
      
      selFields.forEach(field => {
        config.headers.push(
          {
            name: field,
            inputName: field,
            required: true
          }
        );
      });

      CSVFileValidator(file, config)
        .then((csvData) => {
          // console.log(csvData.inValidMessages);
          res.send(csvData.data);
        })
        .catch((err) => {
          // console.log(csvData.inValidMessages);
          res.send(csvData.inValidMessages);
        });
    })
})