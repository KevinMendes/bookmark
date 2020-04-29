const express = require('express');

const videoController = require('../controllers/listVideoController');

// initialisation du router
const router = express.Router();

// création des routes
router.post('/createVideo', videoController.createVideo);
router.post('/destroyVideo', videoController.destroyVideo);
router.get('/allVideo', videoController.allVideo);

module.exports = router;