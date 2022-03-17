'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tasks', [
      {
        name: 'demoUser',
        isComplete: false,
        listId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Tasks', null, {});

  }
};
