'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Lists', [], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Lists', null, {});

  }
};
