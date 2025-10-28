const { sequelize } = require('../sequelize');
const { DataTypes } = require('sequelize');

const ExhibitionBooking = sequelize.define(
  'ExhibitionBooking',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    exhibition_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Exhibitions',
        key: 'id',
      },
    },
    wx_open_id: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    slot: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(191),
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    id_number: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'ExhibitionBookings',
    timestamps: false,
  }
);

module.exports = {
  ExhibitionBooking,
};
