const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const db = {};

// Leer automáticamente todos los modelos del directorio actual
fs.readdirSync(__dirname)
  .filter((file) => file.endsWith(".js") && file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

// Configurar las asociaciones (si existen)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
