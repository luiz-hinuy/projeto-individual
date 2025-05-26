import Rooms from '../models/room.js';

export const index = async (_req, res) => {
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

export const getByID = async (req, res) => {
  const { id } = req.params;
  const room = await Rooms.getByID(id);
  res.json(room);
};