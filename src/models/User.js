const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
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

User.beforeSave('hash password', async (user) => {
    user.password = await bcrypt.hash(user.password, 8);
    console.log(user.password)
});

module.exports = User;
