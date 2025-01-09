const { Sequelize } = require("sequelize");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "mysql",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message);
    process.exit(1);
  }
};

testConnection();

module.exports = sequelize;
