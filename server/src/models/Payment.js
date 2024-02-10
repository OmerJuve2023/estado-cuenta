// models/Payment.js
const {DataTypes} = require('sequelize');
const sequelize = require("server/src/database/query.sql");

const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    paymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Payment;