const { Sequelize, DataTypes } = require("sequelize");

// 从环境变量中读取数据库配置
const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_ADDRESS = "" } = process.env;

const [host, port] = MYSQL_ADDRESS.split(":");

const sequelize = new Sequelize("nodejs_demo", MYSQL_USERNAME, MYSQL_PASSWORD, {
  host,
  port,
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

// 定义数据模型
const Exhibition = sequelize.define('Exhibition', {
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
  description: {
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
    type: DataTypes.STRING(191),
    allowNull: false,
    defaultValue: '',
  },
}, {
  tableName: 'Exhibitions', // 指定数据库表名
  timestamps: false,        // 如果你没有 createdAt / updatedAt
  comment: '展览表',        // 表注释
});

// 数据库初始化方法
async function init() {
  await Exhibition.sync({ alter: true });
}

// 导出初始化方法和模型
module.exports = {
  init,
  Exhibition,
};
