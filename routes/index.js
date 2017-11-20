var express = require('express');
var router = express.Router();
/* estas se utilizan para mostrar en el get de la pagina inicial el username */
var findUser = require('../services/findUser');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Turistear',
    user_active: req.session.user_id //pendiente por colocar el username
  })

});

router.get('/signup', function (req, res, next) {
  res.render('signup', {
    title: 'Turistear'
  });
});

router.get('/login', function (req, res, next) {
  res.render('login', {
    title: 'Turistear'
  });
});

module.exports = router;