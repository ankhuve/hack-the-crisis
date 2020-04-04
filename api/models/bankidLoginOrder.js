'use strict';
module.exports = (sequelize, DataTypes) => {
    const BankIdLoginOrder = sequelize.define('BankIdLoginOrder', {
        orderRef: DataTypes.STRING
    }, {
        freezeTableName: true,
        tableName: 'bankid_login_order'
    });

    BankIdLoginOrder.associate = function (models) {};

    return BankIdLoginOrder;
};