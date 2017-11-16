var User = require('../services/models/user').user;
var DbConnections = require('../services/db-connection');

function getUSer(req, res, next) {
    var conexion = DbConnections();
    User.find(function (err, doc) {
        res.render("user", {
            name: req.query.name,
            time: getTime(),
            title: 'Mi Pagina',
            informacion: doc
        })
    })
}

function getTime() {
    return new Date();
  }

module.exports = getUSer;