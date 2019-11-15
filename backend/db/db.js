var Sequelize = require('sequelize');
var mysql = require('mysql');
var _ = require('lodash');

var Conn = new Sequelize('soulcoachapp', 'soulcoach', 'Welcome!123', {
    host: 'mysqlvm2.mysql.database.azure.com',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = Conn;