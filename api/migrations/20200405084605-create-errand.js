'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Errand', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      requestedBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          onDelete: 'CASCADE',
          hooks: true
        }
      },
      helper: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          onDelete: 'SET NULL',
          hooks: true
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ErrandCategory',
          key: 'id',
          onDelete: 'SET NULL',
          hooks: true
        }
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Errand');
  }
};