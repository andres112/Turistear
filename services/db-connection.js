var config = require('../config.js');
var mongoose = require('mongoose');

function DbConnections() {

    const connection = config.database.host +
        ":" + config.database.port +
        "/" + config.database.database;
    mongoose.connect(connection, {
        useMongoClient: true
    });
}
module.exports = DbConnections;