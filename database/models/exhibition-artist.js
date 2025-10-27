const { sequelize, DataTypes } = require('../sequelize');

const ExhibitionArtist = sequelize.define(
  'ExhibitionArtist',
  {
    exhibition_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Exhibitions',
        key: 'id',
      },
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Artists',
        key: 'id',
      },
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '艺术家在展览中的角色，如 主展 / 协展',
    },
  },
  {
    tableName: 'ExhibitionArtists',
    timestamps: false,
  }
);

module.exports = {
	ExhibitionArtist
}