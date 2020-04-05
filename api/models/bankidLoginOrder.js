'use strict';
module.exports = (sequelize, DataTypes) => {
    const BankIdLoginOrder = sequelize.define('BankidLoginOrder', {
        orderRef: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    BankIdLoginOrder.associate = function (models) {};

    return BankIdLoginOrder;
};