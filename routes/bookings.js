const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookingController');

// Rotas de views (EJS)
router.get('/', controller.index); // Lista bookings
router.get('/new', controller.newForm); // Formulário novo booking
router.get('/edit/:id', controller.editForm); // Formulário editar booking

// Rotas de API (JSON, para Fetch)
router.get('/id/:id', controller.getByID);
router.post('/post', controller.store);
router.post('/edit/:id', controller.update);
router.post('/delete/:id', controller.destroy);

module.exports = router;