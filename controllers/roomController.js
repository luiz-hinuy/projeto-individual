const Rooms = require('../models/room');

exports.index = async (req, res) => {
  const rooms = await Rooms.getAll();
  res.json(rooms);
};

exports.store = async (req, res) => {
  const { number, location } = req.body;
  const newRoom = await Rooms.create(number, location);
  res.status(201).json(newRoom);
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await Rooms.delete(id);
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    if (
      error.message &&
      error.message.includes('violates foreign key constraint')
    ) {
      res.status(409).json({
        error: 'Cannot delete room: there are bookings associated with this room.'
      });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

exports.getByID = async (req, res) => {
  const { id } = req.params;
  const room = await Rooms.getByID(id);
  res.json(room);
};

// Renderiza o formulário para criar nova sala
exports.newForm = (req, res) => {
  res.render('rooms/new'); // Crie o arquivo views/rooms/new.ejs
};

// Renderiza o formulário para editar uma sala existente
exports.editForm = async (req, res) => {
  const { id } = req.params;
  const room = await Rooms.getByID(id);
  if (!room) {
    return res.status(404).send('Sala não encontrada');
  }
  res.render('rooms/edit', { room }); // Crie o arquivo views/rooms/edit.ejs
};

// Atualiza uma sala
exports.update = async (req, res) => {
  const { id } = req.params;
  const { number, location } = req.body;
  const updatedRoom = await Rooms.update(id, number, location);
  if (!updatedRoom) {
    return res.status(404).json({ error: 'Sala não encontrada' });
  }
  res.json(updatedRoom);
};