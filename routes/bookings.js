const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Rotas de views (EJS)
router.get('/', bookingController.index); // Lista de reservas
router.get('/new', bookingController.newForm); // Formulário para nova reserva
router.get('/edit/:id', bookingController.editForm); // Formulário para editar reserva

// Rotas de API (JSON, para Fetch ou AJAX)
router.get('/id/:id', bookingController.getBookingById);
router.post('/post', bookingController.createBooking);
router.post('/edit/:id', bookingController.updateBooking);
router.post('/delete/:id', bookingController.deleteBooking);

module.exports = router;