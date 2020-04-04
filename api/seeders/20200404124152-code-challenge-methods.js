'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('code_challenge_method', [
      {
        id: 1,
        method: 's256'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('code_challenge_method', {
      method: {[Sequelize.Op.in]: ['s256']}
    }, {});
  }
};
