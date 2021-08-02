module.exports = (sequelize, Sequelize) => {
    const device = sequelize.define("device", {
        deviceid: {
            type: Sequelize.STRING,
            primaryKey : true
        },
        petname: {
            type: Sequelize.STRING
        },
        MSISDN: {
            type: Sequelize.STRING
        },
        geofence: {
            type: Sequelize.STRING
        }
    });
    return device;
};