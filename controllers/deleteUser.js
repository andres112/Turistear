var User = require('../services/models/user').user;
var DbConnections = require('../services/db-connection');

function deleteUser(req, res, next) {
    var conexion = DbConnections();
    User.deleteMany({
        email: req.query.email
    }, function (err, doc) {
        res.send("Datos eliminados" + doc)
    })
}

module.exports = deleteUser;