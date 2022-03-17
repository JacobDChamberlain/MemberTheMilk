'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        username: 'demoUser',
        email: 'demoUser@gmail.com',
        hashedPassword: '$2a$12$vz1uC38P/xjHDSnbh6Rm5.f3MT8wojAZ1uJxS2YA/j82i09GjoY6e',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
