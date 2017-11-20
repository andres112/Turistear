var DbConnections = require('../services/db-connection');
var express = require('express');
var User = require('../services/models/user').user;
var User_Ctrl = require('../controllers/index');

var router = express.Router();

/* GET users listing. */
router.post('/session', User_Ctrl.login);

router.get('/delete', User_Ctrl.deleteUser);

router.post('/', User_Ctrl.signup);

module.exports = router;