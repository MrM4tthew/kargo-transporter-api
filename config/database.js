const Sequelize = require("sequelize");

// database connection to heroku
module.exports = new Sequelize(
  "postgres://postgres:adminishere12345@db.vxxjtpgenligewwxdyse.supabase.co:6543/postgres",
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
