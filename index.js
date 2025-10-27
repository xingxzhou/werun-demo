const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { init: initDB, Exhibition, Artist } = require('./database');

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
    include: [{ model: Artist, as: 'artists' }],
  });

  res.send({
    code: 0,
    data: exhibition,
  });
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
