const { sequelize, DataTypes } = require("../sequelize");

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
	},
	{
		tableName: 'Exhibitions', // 指定数据库表名
		timestamps: false, // 如果你没有 createdAt / updatedAt
		comment: '展览表', // 表注释
	}
);

module.exports = {
	Exhibition
}