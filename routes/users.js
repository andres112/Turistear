var DbConnections = require('../services/db-connection');
var express = require('express');
var User = require('../services/models/user').user;

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find(function (err, doc) {
    res.render("user", {
      name: req.query.name,
      time: getTime(),
      title: 'Mi Pagina',
      informacion: doc
    })
  })
});

router.get('/delete', function (req, res, next) {
  User.deleteMany({
    email: req.query.email
  }, function (err, doc) {
    res.send("Datos eliminados" + doc)
  })
});

router.post('/', function (req, res, next) {
  var conexion = DbConnections();
  var user = new User({
    email: req.body.email,
    password: req.body.password,
    date_birth: new Date("October 30, 1990"),
    password_confirm: req.body.password_confirm
  });

  console.log(user.email + user.password + user.date_birth + user.password_confirm);
  user.save(function () { //callback para acciones asincronas, como leer en bases de datos
    res.render("user", {
      email: req.body.email,
      time: getTime(),
      title: 'Mi Pagina'
    })
  })
});

function getTime() {
  return new Date();
}

module.exports = router;