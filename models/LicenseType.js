const Sequelize = require("sequelize");
const db = require("../config/database");
const Truck = require("../models/Truck");

const LicenseType = db.define("LicenseType", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// LicenseType.associate = (models) => {
//   LicenseType.hasMany(models.Truck, {
//     onDelete: "cascade",
//   });
// };

LicenseType.hasMany(Truck);

module.exports = LicenseType;
