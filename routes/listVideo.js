const express = require('express');

const videoController = require('../controllers/listVideoController');

// initialisation du router
const router = express.Router();

// création des routes
router.post('/createVideo', videoController.createVideo);
router.post('/destroyVideo', videoController.destroyVideo);
router.post('/allVideo', videoController.allVideo);
router.post('/modifVideo', videoController.modifVideo);

module.exports = router;