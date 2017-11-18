var DbConnections = require('../services/db-connection');
var express = require('express');
var User = require('../services/models/user').user;
var User_Ctrl = require('../controllers/index');

var router = express.Router();

/* GET users listing. */
router.get('/', User_Ctrl.getUser);

router.get('/delete', User_Ctrl.deleteUser);

router.post('/', function (req, res, next) {
  var conexion = DbConnections();
  var user = new User({
    email: req.body.email,
    password: req.body.password,
    date_birth: new Date("October 30, 1990"),
    password_confirm: req.body.password_confirm,
    sexo: req.body.sex
  });

  //ALmacenar los datos con una promise, debido a que
  //es un proceso asincrono
  user.save().then(() =>
    res.render("user", {
      email: req.body.email,
      sexo: req.body.sex,
      time: getTime(),
      title: 'Mi Pagina'
    })
  ).catch(err =>
    res.send(err.message)
  )
});

function getTime() {
  return new Date();
}

module.exports = router;