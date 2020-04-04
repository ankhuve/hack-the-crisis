'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        pnr: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
    }, {
        freezeTableName: true,
        tableName: 'user'
    });
    
    return User;
};
