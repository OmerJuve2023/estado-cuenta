// models/Customer.js
const {DataTypes} = require('sequelize');
const sequelize = require("server/src/database/query.sql");

const Customer = sequelize.define('Customer', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
});

module.exports = Customer;
