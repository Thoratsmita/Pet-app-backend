const dbConfig = require("./db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports.sequelize = sequelize
module.exports.user = require("../models/user.model")(sequelize, Sequelize);
module.exports.userToken = require("../models/user-token.model")(sequelize, Sequelize);
module.exports.device = require("../models/device.model")(sequelize, Sequelize);
module.exports.product = require("../models/product.model")(sequelize, Sequelize);
module.exports.order = require("../models/order.model")(sequelize, Sequelize);
module.exports.orderhistory = require("../models/order-history.model")(sequelize, Sequelize);