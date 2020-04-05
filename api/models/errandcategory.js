'use strict';
module.exports = (sequelize, DataTypes) => {
  const ErrandCategory = sequelize.define('ErrandCategory', {
    displayName: DataTypes.STRING,
    severity: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });

  ErrandCategory.associate = function(models) {
    // ErrandCategory.hasMany(models.Errand);
  };

  return ErrandCategory;
};
