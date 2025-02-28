'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { // định danh các mối quan hệ
            Post.belongsTo(models.Author, { foreignKey: 'authorId', as: 'Author' });
        }
    };
    Post.init({
        title: DataTypes.STRING,
        date: DataTypes.DATE,
        description: DataTypes.STRING,
        link: DataTypes.STRING,
        authorId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Post',
        tableName: "Posts",
    });
    return Post;
};