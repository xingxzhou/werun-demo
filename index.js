const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {
  init: initDB,
  Exhibition,
  Artist,
  Artwork,
  ExhibitionBooking,
} = require('./database');

const logger = morgan('tiny');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

// 首页
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 获取展览
app.get('/api/exhibitions', async (req, res) => {
  const result = await Exhibition.findAll({
    order: [['id', 'DESC']],
    limit: 20,
  });
  res.send({
    code: 0,
    data: result,
  });
});

app.get('/api/exhibitions/:id', async (req, res) => {
  const exhibitionId = req.params.id;

  const exhibition = await Exhibition.findByPk(exhibitionId, {
    include: [
      { model: Artist, as: 'artists' },
      { model: Artwork, as: 'artworks' },
    ],
  });

  res.send({
    code: 0,
    data: exhibition,
  });
});

app.get('/api/artworks/:id', async (req, res) => {
  const artworkId = req.params.id;

  const artwork = await Artwork.findByPk(artworkId);

  res.send({
    code: 0,
    data: artwork,
  });
});

app.get('/api/bookings', async (req, res) => {
  const openId = req.headers['x-wx-source'];

  const bookings = await ExhibitionBooking.findAll({
    where: {
      wx_open_id: openId,
    },
    order: [['id', 'DESC']],
    include: {
      model: Exhibition,
      as: 'exhibition', // 注意这里的 as 要和关联定义一致
      attributes: ['id', 'title', 'start_date', 'end_date', "cover_image"],
    },
  });

  res.send({
    code: 0,
    data: bookings,
  });
});

app.post('/api/bookings', async (req, res) => {
  const openId = req.headers['x-wx-source'];

  const booking = await ExhibitionBooking.create({
    ...req.body,
    wx_open_id: openId,
  });

  res.send({ code: 0, data: booking });
});

// 小程序调用，获取微信 Open ID
app.get('/api/wx_openid', async (req, res) => {
  if (req.headers['x-wx-source']) {
    res.send(req.headers['x-wx-openid']);
  }
});

const port = process.env.PORT || 80;

async function bootstrap() {
  await initDB();
  app.listen(port, () => {
    console.log('启动成功', port);
  });
}

bootstrap();
