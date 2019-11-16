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

var Streams = Conn.define('streams', {
    streamId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: !0
    },
    communityId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    consultantId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    streamLink: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

var Languages = Conn.define('languages', {
    languageId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: !0
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    active: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

var Communities = Conn.define('communities', {
    communityId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: !0
    },
    languageId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    active: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

var Consultants = Conn.define('consultans', {
    consultantId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: !0
    },
    user: Users,
    community: Communities,
    active: {
        type: Sequelize.STRING,
        allowNull: true
    },

})


module.exports = Conn;