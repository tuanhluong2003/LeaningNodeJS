'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            // define association here
        }
    };
    allcode.init({
        key: DataTypes.STRING,
        TYPE: DataTypes.STRING,
        valueEN: DataTypes.STRING,
        valueVI: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'allcode',
    });
    return allcode;
};