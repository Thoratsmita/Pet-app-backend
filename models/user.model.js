module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        name: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        doorNo: {
            type: Sequelize.STRING
        },
        streetName: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    });
    return user;
};