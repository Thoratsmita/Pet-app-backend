module.exports = (sequelize, Sequelize) => {
    const userToken = sequelize.define("user-token", {
        email: {
            type: Sequelize.STRING
        },
        token: {
            type: Sequelize.STRING
        }
    });
    return userToken;
};