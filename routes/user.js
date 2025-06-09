const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

// Rotas de views (EJS)
router.get('/', controller.index); // Lista usuários
router.get('/new', controller.newForm); // Formulário novo usuário
router.get('/edit/:id', controller.editForm); // Formulário editar usuário

// Rotas de API (JSON, para Fetch)
router.get('/id/:id', controller.getByID);
router.post('/post', controller.store);
router.post('/edit/:id', controller.update);
router.post('/delete/:id', controller.destroy);

module.exports = router;