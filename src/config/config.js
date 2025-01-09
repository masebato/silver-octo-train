require("dotenv").config();

const path = require("path");

module.exports = {
  development: {
    use_env_variable: "DATABASE_URL",
    dialect: "mysql",
    migrationStorage: "sequelize",
    migrationStoragePath: path.resolve(__dirname, "../db/migrations"),
    logging: true,
  },
  test: {
    use_env_variable: "DATABASE_URL",
    dialect: "mysql",
    migrationStorage: "sequelize",
    migrationStoragePath: path.resolve(__dirname, "../db/migrations"),
    logging: false,
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "mysql",
    migrationStorage: "sequelize",
    migrationStoragePath: path.resolve(__dirname, "../db/migrations"),
    logging: false,
  },
};
