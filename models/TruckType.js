const Sequelize = require("sequelize");
const db = require("../config/database");
const Truck = require("../models/Truck");

const TruckType = db.define("TruckType", {
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

// TruckType.associate = (models) => {
//   TruckType.hasMany(models.Truck, {
//     onDelete: "cascade",
//   });
// };

TruckType.hasMany(Truck);

module.exports = TruckType;
