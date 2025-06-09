const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do EJS como template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Rotas
const usersRoutes = require('./routes/user');
app.use('/users', usersRoutes);

const bookingRoutes = require('./routes/bookings');
app.use('/bookings', bookingRoutes);

const roomsRoutes = require('./routes/rooms');
app.use('/rooms', roomsRoutes);


// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});