const db = require("../config/database");

module.exports = {
  async getAll() {
    const result = await db.query('SELECT * FROM rooms');
    return result.rows; // Corrigido: antes retornava só a primeira linha
  },

  async getByID(id) { // Corrigido nome do método
    const result = await db.query('SELECT * FROM rooms WHERE id = $1', [id]);
    return result.rows[0];
  },

  async create(rooms_id, user_id, start_time, end_time) {
    const result = await db.query(
      'INSERT INTO rooms (rooms_id, user_id, start_time, end_time) VALUES ($1, $2, $3, $4) RETURNING *',
      [rooms_id, user_id, start_time, end_time]
    );
    return result.rows[0];
  },

  async update(id, rooms_id, user_id, start_time, end_time) {
    const result = await db.query(
      'UPDATE rooms SET rooms_id = $1, user_id = $2, start_time = $3, end_time = $4 WHERE id = $5 RETURNING *',
      [rooms_id, user_id, start_time, end_time, id]
    );
    return result.rows[0];
  },

  async delete(id) {
    await db.query('DELETE FROM rooms WHERE id = $1', [id]);
  }
};
