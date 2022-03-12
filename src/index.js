const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// Database
const db = require("../config/database");
const Truck = require("../models/Truck");
const TruckType = require("../models/TruckType");
const LicenseType = require("../models/LicenseType");

db.sync({
  force: false,
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
// db.authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/trucks", require("../routes/api/truck"));
app.use("/licensetype", require("../routes/api/licensetype"));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
