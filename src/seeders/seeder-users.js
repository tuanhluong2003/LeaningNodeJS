'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [];

    for (let i = 0; i < 100; i++) {
      users.push({
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        address: faker.address.city(),
        phoneNumber: faker.phone.number(),
        gender: Math.random() < 0.5 ? 0 : 1,
        image: faker.image.avatar(),
        roleId: 'R' + (Math.random() < 0.5 ? '1' : '2'),
        possitionId: 'R' + (Math.random() < 0.5 ? '1' : '2'),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert('Users', users);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
