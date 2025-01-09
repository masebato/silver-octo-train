"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Branch, {
        foreignKey: "branchId",
        as: "branch",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      branchId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
