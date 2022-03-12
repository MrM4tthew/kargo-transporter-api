const Sequelize = require("sequelize");

// database connection to heroku
module.exports = new Sequelize(
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
