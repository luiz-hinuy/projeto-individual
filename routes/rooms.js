const express = require('express');
const router = express.Router();
const controller = require('../controllers/roomController');

router.get('/', controller.index);
router.post('/', controller.store);
router.post('/delete/:id', controller.destroy);
router.get('/id/:id', controller.getByID);

module.exports = router;