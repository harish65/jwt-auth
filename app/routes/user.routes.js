var express = require('express');
var router = express.Router();
const users = require('../controllers/userController');



router.get('/users', users.getUsers);
module.exports = router;