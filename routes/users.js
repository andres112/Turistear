var DbConnections = require('../services/db-connection');
var express = require('express');
var User = require('../services/models/user').user;
var User_Ctrl = require('../controllers/index');

var router = express.Router();

/* GET users listing. */
router.post('/session', User_Ctrl.login);

router.get('/delete', User_Ctrl.deleteUser);

router.post('/', function (req, res, next) {
  var conexion = DbConnections();
  var user = new User({
    name: req.body.name,
    username:req.body.username,
    email: req.body.email,
    password: req.body.password,
    date_birth: new Date(req.body.birth),
    password_confirm: req.body.password_confirm,
    sexo: req.body.sex,
    phone: req.body.phone
  });

  //ALmacenar los datos con una promise, debido a que
  //es un proceso asincrono
  user.save().then(() =>
    res.render("user", {
      email: req.body.email,
      sexo: req.body.sex,
      phone: req.body.phone,
      time: getTime(),
      title: 'Turistear'
    })
  ).catch(err =>
    res.send(err.message)
  )
});

function getTime() {
  return new Date();
}

module.exports = router;