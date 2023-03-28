const { Model, DataTypes } = require("sequelize");

class Todo extends Model {}

Todo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrementIdentity: true,
    },

    username: {
        type: DataTypes.CHAR,
        unique: true,
        allowNull: false,
    },

    password: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
});

module.exports = Todo;
