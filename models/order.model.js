module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("order", {
        orderid: {
            type: Sequelize.STRING,
            primaryKey : true
        },
        userid: {
            type: Sequelize.STRING
        },
        orderdate: {
            type: Sequelize.DATE
        }
    });
    return order;
};