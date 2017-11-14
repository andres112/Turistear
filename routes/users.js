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

  user.save(function (err) { //callback para acciones asincronas, como leer en bases de datos
    if(err){
      res.send(err);
    }
    res.render("user", {
      email: req.body.email,
      sexo: req.body.sex,
      time: getTime(),
      title: 'Mi Pagina'
    })
  })
});

function getTime() {
  return new Date();
}

module.exports = router;