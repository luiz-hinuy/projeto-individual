import Rooms from '../models/room.js';

export const index = async (req, res) => {
  const rooms = await Rooms.getAll();
  res.json(rooms);
};

export const store = async (req, res) => {
  const { number, location } = req.body;
  const newRoom = await Rooms.create(number, location);
  res.status(201).json(newRoom); // ✅ resposta útil
};

export const destroy = async (req, res) => {
  const { id } = req.params;
  await Rooms.delete(id);
  res.json({ message: 'Room deleted successfully' });
};

export const getByID = async (req, res) => {
  const { id } = req.params;
  const room = await Rooms.getByID(id);
  res.json(room);
};