"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Franchise extends Model {
    static associate(models) {
      Franchise.hasMany(models.Branch, {
        foreignKey: "franchiseId",
        as: "branches",
      });
    }
  }
  Franchise.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Franchise",
    }
  );
  return Franchise;
};
