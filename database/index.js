const {
  Exhibition,
  Artist,
  ExhibitionArtist,
  Artwork,
  ExhibitionArtwork,
  ExhibitionBooking,
} = require('./models');

// 关系表
Exhibition.belongsToMany(Artist, {
  through: 'ExhibitionArtists',
  as: 'artists',
  foreignKey: 'exhibition_id',
});

// Artist.js
Artist.belongsToMany(Exhibition, {
  through: 'ExhibitionArtists',
  as: 'exhibitions',
  foreignKey: 'artist_id',
});

Exhibition.belongsToMany(Artwork, {
  through: 'ExhibitionArtworks',
  as: 'artworks',
  foreignKey: 'exhibition_id',
  otherKey: 'artwork_id',
});

// 数据库初始化方法
async function init() {
  await Exhibition.sync({ alter: true });
  await Artist.sync({ alert: true });
  await ExhibitionArtist.sync({ alert: true });
  await Artwork.sync({ alert: true });
  await ExhibitionArtwork.sync({ alert: true });
}

// 导出初始化方法和模型
module.exports = {
  init,
  Exhibition,
  Artist,
  Artwork,
  ExhibitionArtist,
  ExhibitionArtwork,
  ExhibitionBooking,
};
