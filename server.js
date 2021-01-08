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
  console.log("CSV2JSON");
  res.send("<h1>CSV2JSON</h1>");
});

let randomString = (length, chars) => {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

app.post("/api", (req, res) => {
  fetch(req.body.csv.url)
    .then((res) => res.text())
    .then((file) => {
      let config = {
        headers: [],
        isHeaderNameOptional: true,
      };

      //Only Parse in parameters into headers array if parameters exist
      if (req.body.csv.select_fields) {
        const selFields = req.body.csv.select_fields;

        selFields.forEach((field) => {
          config.headers.push({
            name: field,
            inputName: field,
            required: true,
          });
        });

        config.isHeaderNameOptional = false;
      }

      CSVFileValidator(file, config)
        .then((csvData) => {
          console.log(csvData.inValidMessages);
          res.send({
            conversion_key: randomString(
              32,
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            ),
            json: csvData.data,
          });
        })
        .catch((err) => {
          console.log(csvData.inValidMessages);
          res.send(csvData.inValidMessages);
        });
    });
});
