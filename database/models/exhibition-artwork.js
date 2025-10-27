const { sequelize } = require('../sequelize');
const { DataTypes } = require('sequelize');

const ExhibitionArtwork = sequelize.define(
  'ExhibitionArtwork',
  {
    exhibition_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Exhibitions',
        key: 'id',
      },
      comment: '展览ID',
    },
    artwork_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Artworks',
        key: 'id',
      },
      comment: '作品ID',
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '作品在展览中的角色，如主展 / 协展',
    },
  },
  {
    tableName: 'ExhibitionArtworks',
    timestamps: false,
    comment: '展览-作品关联表',
  }
);

module.exports = {
	ExhibitionArtwork
}