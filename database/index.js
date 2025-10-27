const { Exhibition, Artist, ExhibitionArtist } = require('./models');

// 关系表
Exhibition.belongsToMany(Artist, {
  through: 'ExhibitionArtists',
  foreignKey: 'exhibition_id',
});

// Artist.js
Artist.belongsToMany(Exhibition, {
  through: 'ExhibitionArtists',
  foreignKey: 'artist_id',
});

// 数据库初始化方法
async function init() {
  await Exhibition.sync({ alter: true });
  await Artist.sync({ alert: true });
  await ExhibitionArtist.sync({ alert: true });
}

// 导出初始化方法和模型
module.exports = {
  init,
  Exhibition,
  Artist,
};
