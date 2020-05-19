const fs = require("fs");
const path = require("path");
const carsMockData = require("./cars/mockData");

const { cars } = carsMockData;
const data = JSON.stringify({ cars });
// Create a db.json file so the json-server can read this
const filepath = path.join(__dirname, "../src/db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
