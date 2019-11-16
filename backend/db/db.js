var Sequelize = require('sequelize');
var mysql = require('mysql');
var _ = require('lodash');

var Conn = new Sequelize('soulcoachapp', 'soulcoach@mysqlvm2', 'Welcome!123', {
    host: 'mysqlvm2.mysql.database.azure.com',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        encrypt: true,
        ssl : {
          rejectUnauthorized: false
        }
    },
    define: {
        timestamps: false
    }
});

var Users = Conn.define('users', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: !0
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    consent: {
        type: Sequelize.STRING,
        allowNull: true
    },
    active: {
        type: Sequelize.STRING,
        allowNull: true
    },
    defaultLanguageId: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

var UserProperties = Conn.define('userProperties', {
    userPropertiesId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: !0
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = Conn;