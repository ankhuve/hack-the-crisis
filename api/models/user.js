'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    pnr: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    freezeTableName: true
  });

  User.associate = function(models) {
    // associations can be defined here
  };
  
  return User;
};
