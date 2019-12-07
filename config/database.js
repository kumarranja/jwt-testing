const Sequelize = require('sequelize');
const path = require('path');

const connection = require('./connection');
const CHARSET = 'utf8';
const COLLATE = 'utf8_general_ci';

let database;

switch (process.env.NODE_ENV) {
	case 'production':
		database = new Sequelize(
			connection.production.database,
			connection.production.username,
			connection.production.password, {
				host: connection.production.host,
				port: connection.production.port,
				dialect: connection.production.dialect,
				pool: {
					max: 5,
					min: 0,
					idle: 10000,
				},
				charset: CHARSET,
				collate: COLLATE, 
				timestamps: true,
				logging:false
			}
		);
}

module.exports = database;
