module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
        productid: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        productname: {
            type: Sequelize.STRING
        },
        productdescription: {
            type: Sequelize.STRING
        }
    });
    return product;
};