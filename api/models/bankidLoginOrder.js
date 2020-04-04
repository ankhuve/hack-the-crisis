'use strict';

module.exports = (sequelize, DataTypes) => {
    const BankIdLoginOrder = sequelize.define('BankIdLoginOrder', {
        orderRef: DataTypes.STRING,
        codeChallenge: DataTypes.STRING,
        codeChallengeMethodId: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        tableName: 'bankid_login_order'
    });

    BankIdLoginOrder.associate = function(models) {
        BankIdLoginOrder.belongsTo(models.CodeChallengeMethod, {foreignKey: 'codeChallengeMethodId', as: 'codeChallengeMethod'})
    };

    return BankIdLoginOrder;
};
