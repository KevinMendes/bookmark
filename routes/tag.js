const express = require('express');

const tagController = require('../controllers/TagController');
// init du router
const router = express.Router();
// création des routes
router.post('/createTag', tagController.createTag);
router.post('/destroyTag', tagController.destroyTag);
router.get('/allTag', tagController.allTag);
router.post('/updateTag', tagController.updateTag);


module.exports = router;