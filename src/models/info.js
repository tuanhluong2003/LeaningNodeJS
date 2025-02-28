'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class INFO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // định danh các mối quan hệ
      // define association here
    }
  };
  INFO.init({
    name: DataTypes.STRING,
    pass: DataTypes.STRING,
    add: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'INFO',
    tableName: "INFO",
  });
  return INFO;
};