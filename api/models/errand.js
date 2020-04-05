'use strict';
module.exports = (sequelize, DataTypes) => {
  const Errand = sequelize.define('Errand', {
    description: DataTypes.STRING,
    requestedBy: DataTypes.INTEGER,
    helper: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    freezeTableName: true
  });

  Errand.associate = function(models) {
    Errand.belongsTo(models.ErrandCategory, {foreignKey: 'categoryId', as: 'category'});
    Errand.belongsTo(models.User, {foreignKey: 'helper', as: 'helperUser'});
    Errand.belongsTo(models.User, {foreignKey: 'requestedBy', as: 'requestUser'});
  };
  return Errand;
};