var User = require('../services/models/user').user;
var DbConnections = require('../services/db-connection');

function login(req, res, next) {
    var conexion = DbConnections();
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }).then(user => {
        if (user._id) {
            req.session.user_id = user._id;
            res.render("user", {
                name: req.body.email,
                time: getTime(),
                title: 'Turistear',
                informacion: user
            })

        }
    }).catch(err => res.send("Usuario no encontrado"))
}

function getTime() {
    return new Date();
}

module.exports = login;