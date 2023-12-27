var express = require('express');
var router = express.Router();
const users = require('../controllers/userController');



router.get('/users', users.getUsers);
router.post('/add', users.register);
router.post('/login', users.login);
module.exports = router;