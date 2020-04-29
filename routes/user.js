const express = require('express');

const userController = require('../controllers/userController');

// initialisation du router
const router = express.Router();

// création des routes
router.post('/createAccount', userController.createAccount);
router.post('/login', userController.login);

module.exports = router;