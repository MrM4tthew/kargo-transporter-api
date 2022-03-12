const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const Sequelize = require("sequelize");

// database connection to heroku
const sequelize = new Sequelize(
  "postgres://ylenzferzbwquq:5050e32477f4df2e4e7fb24e85ed0d4186c43c5fe058c991dbf458ab895d6fd2@ec2-176-34-105-15.eu-west-1.compute.amazonaws.com:5432/d6cje5f3d1kpbc",
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
