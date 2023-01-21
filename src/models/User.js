//always start with at least one model

const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.schema('users', {});

User.findAll({}); // * get all the users from the database

module.exports = User;
