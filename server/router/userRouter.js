const express = require('express');
const UserController = require('../controllers/userController');


const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUser);

module.exports = router;
