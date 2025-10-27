const { sequelize } = require('../sequelize');
const { DataTypes } = require('sequelize');

const Exhibition = sequelize.define(
  'Exhibition',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: '',
    },
    title_rich: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    curators: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    description_rich: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY, // DATE 类型
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cover_image: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: '',
    },
    poster_image: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },
  },
  {
    tableName: 'Exhibitions', // 指定数据库表名
    timestamps: false, // 如果你没有 createdAt / updatedAt
    comment: '展览表', // 表注释
  }
);

module.exports = {
  Exhibition,
};
