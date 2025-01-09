"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    static associate(models) {
      Branch.belongsTo(models.Franchise, {
        foreignKey: "franchiseId",
        as: "franchise",
      });

      Branch.hasMany(models.Product, {
        foreignKey: "branchId",
        as: "products",
      });
    }
  }
  Branch.init(
    {
      name: DataTypes.STRING,
      franchiseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Branch",
    }
  );
  return Branch;
};
