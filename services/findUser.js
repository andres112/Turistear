var User = require('./models/user').user;
var DbConnections = require('./db-connection');

function findUser(user_id) {
    var conexion = DbConnections();
    User.findOne({
        _id: user_id,
    }, {
        username: 1
    }).then(user => {
        console.log(user.username);
        return toString(user.username);
    }).catch(err =>{ return err})
}

module.exports = findUser;