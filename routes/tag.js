const express = require('express');

const tagController = require('../controllers/TagController');
// init du router
const router = express.Router();
// création des routes
router.post('/createTagImage', tagController.createTagImage);
router.post('/destroyTag', tagController.destroyTag);
router.post('/allTagImage', tagController.allTagImage);
router.post('/allTagVideo', tagController.allTagVideo);
router.post('/updateTag', tagController.updateTag);
router.post('/createTagVideo', tagController.createTagVideo);


module.exports = router;