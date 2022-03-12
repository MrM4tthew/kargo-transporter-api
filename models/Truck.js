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
  trucktype_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "TruckTypes",
      key: "id",
    },
    field: "trucktype_id",
  },
  licensetype_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "LicenseTypes",
      key: "id",
    },
    field: "licensetype_id",
  },
});

// Truck.belongsTo(TruckType);
// Truck.belongsTo(LicenseType);
Truck.associate = function (models) {
  // Truck.belongsTo(models.LicenseType, {
  //   foreignKey: "trucktype_id",
  // }),
  Truck.belongsTo(models.TruckTypes, {
    foreignKey: "trucktype_id",
    onDelete: "CASCADE",
  });
};
Truck.associate = function (models) {
  // Truck.belongsTo(models.LicenseType, {
  //   foreignKey: "trucktype_id",
  // }),
  Truck.belongsTo(models.LicenseTypes, {
    foreignKey: "licensetype_id",
    onDelete: "CASCADE",
  });
};

module.exports = Truck;
