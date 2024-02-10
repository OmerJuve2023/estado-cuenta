// models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require("server/src/database/query.sql");

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
        allowNull: false,
    },
});

module.exports = Order;
