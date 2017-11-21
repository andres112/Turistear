var DbConnections = require('../services/db-connection');
var express = require('express');
var User = require('../services/models/user').user;
var User_Ctrl = require('../controllers/index');
var auth = require('../middlewares/session');


var router = express.Router();

/* GET users listing. */

router.post('/', User_Ctrl.signup);
router.post('/session', User_Ctrl.login);
router.use(auth); //atento al orden en el que se encuentra este middleware
router.get('/delete', User_Ctrl.deleteUser);

module.exports = router;