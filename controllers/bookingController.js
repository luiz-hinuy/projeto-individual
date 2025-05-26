const Bookings = require('../models/booking');

// List all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Bookings.getAll();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Bookings.getByID(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new booking
exports.createBooking = async (req, res) => {
  const { rooms_id, user_id, start_time, end_time } = req.body;

  if (!rooms_id || !user_id || !start_time || !end_time) {
    return res.status(400).json({ error: 'rooms_id, user_id, start_time e end_time são obrigatórios' });
  }

  try {
    const booking = await Bookings.create(rooms_id, user_id, start_time, end_time);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a booking
exports.updateBooking = async (req, res) => {
  const { id } = req.params;
  const { rooms_id, user_id, start_time, end_time } = req.body;

  if (!rooms_id || !user_id || !start_time || !end_time) {
    return res.status(400).json({ error: 'rooms_id, user_id, start_time e end_time são obrigatórios' });
  }

  try {
    const updatedBooking = await Bookings.update(id, rooms_id, user_id, start_time, end_time);
    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    await Bookings.delete(id);
    res.json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
