'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Lists', [
      {
        name: "Today",
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tomorrow",
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: "This Week",
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: "Trash",
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Lists', null, {});

  }
};
