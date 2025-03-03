'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Author extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            Author.hasMany(models.Post, { foreignKey: 'authorId', as: 'Post' });
        }
    };
    Author.init({
        name: DataTypes.STRING,
        birthday: DataTypes.DATE,
        address: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Author',
        tableName: "Authors",
    });
    return Author;
};