'use strict';

module.exports = (sequelize, DataTypes) => {
    const CodeChallengeMethod = sequelize.define('CodeChallengeMethod', {
        method: DataTypes.STRING
    }, {
        freezeTableName: true,
        tableName: 'code_challenge_method'
    });

    return CodeChallengeMethod;
};
