const express = require('express');

const imageController = require('../controllers/listImageController');

// initialisation du router
const router = express.Router()

// création des routes
router.post('/createImage', imageController.createImage);
router.post('/destroyImage', imageController.destroyImage);
router.post('/allImage', imageController.allImage);
router.post('/modifImage', imageController.modifImage);

module.exports = router;