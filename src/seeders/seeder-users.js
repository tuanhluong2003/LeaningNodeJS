'use strict';

module.exports = {
  // email: DataTypes.STRING,
  // password: DataTypes.STRING,
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,
  // address: DataTypes.STRING,
  // phoneNumber: DataTypes.STRING,
  // gender: DataTypes.BOOLEAN,
  // image: DataTypes.STRING,
  // roleId: DataTypes.STRING,
  // possitionId: DataTypes.STRING

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '1111',
        firstName: 'Anh',
        lastName: 'Tu',
        address: 'HaNoi',
        phoneNumber: '1900 3838',
        gender: 1,
        image: 'https://sequelize.org/img/logo.svg',
        roleId: 'R1',
        possitionId: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
