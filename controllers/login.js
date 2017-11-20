var User = require('../services/models/user').user;
var DbConnections = require('../services/db-connection');

function login(req, res, next) {
    var conexion = DbConnections();
    User.findOne({
            email: req.body.email,
            password: req.body.password
        },
        function (err, doc) {
            res.render("user", {
                name: req.body.email,
                time: getTime(),
                title: 'Turistear',
                informacion: doc
            })
        })
}

function getTime() {
    return new Date();
}

module.exports = login;