const Sequelize = require("sequelize");
const db = require("../config/database");
// const TruckType = require("./TruckType");
// const LicenseType = require("./LicenseType");

const Truck = db.define("Truck", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  license_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  production_year: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stnk_img: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  kir_img: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  // trucktype_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: "TruckType",
  //   referencesKey: "id",
  // },
  // licensetype_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: "LicenseType",
  //   referencesKey: "id",
  // },
});

// Truck.belongsTo(TruckType);
// Truck.belongsTo(LicenseType);

module.exports = Truck;
