const { sequelize } = require("../sequelize");
const { DataTypes } = require('sequelize');

const Artist = sequelize.define(
  'Artist',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: '艺术家姓名',
    },
    name_en: {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: '艺术家英文名',
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '艺术家简介',
    },
    avatar_url: {
      type: DataTypes.STRING(191),
      allowNull: true,
      comment: '头像图片 URL',
    },
  },
  {
    tableName: 'Artists',
    comment: '艺术家表',
  }
);

module.exports = {
	Artist
}