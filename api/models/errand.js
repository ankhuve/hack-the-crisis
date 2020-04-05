'use strict';
module.exports = (sequelize, DataTypes) => {
  const Errand = sequelize.define('Errand', {
    description: DataTypes.STRING,
    requestedBy: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    tableName: 'errand',
    freezeTableNames: true
  });
  Errand.associate = function(models) {
    Errand.belongsTo(models.ErranCategory);
  };
  return Errand;
};