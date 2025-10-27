const { sequelize } = require('../sequelize');
const { DataTypes } = require('sequelize');

const Artwork = sequelize.define(
  'Artwork',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: '作品ID',
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: '',
      comment: '作品中文名',
    },
    name_en: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: '',
      comment: '作品英文名',
    },
    description_rich: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '作品富文本描述',
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: '作品图片列表，JSON 数组存储 URL',
    },
  },
  {
    tableName: 'Artworks',
    timestamps: false, // 如果你的表没有 createdAt / updatedAt
    comment: '作品表',
  }
);

module.exports = {
	Artwork
}