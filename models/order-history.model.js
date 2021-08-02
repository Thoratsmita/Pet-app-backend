const order = require('./order.model')
const product = require('./product.model')

module.exports = (sequelize, Sequelize) => {
    const orderhistory = sequelize.define("order-history", {
        orderid: {
            type: Sequelize.STRING
        },
        productid: {
            type: Sequelize.STRING
        }
    });
    return orderhistory;
};