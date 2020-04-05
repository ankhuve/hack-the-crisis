'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ErrandCategory', [{
        displayName: 'Övrigt',
        severity: 1
      },
      {
        displayName: 'Mathandel',
        severity: 20
      }, {
        displayName: 'Medicin',
        severity: 40
      }
    ], {});
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ErrandCategory', null, {});
    }
};