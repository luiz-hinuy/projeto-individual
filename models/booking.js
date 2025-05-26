const db = require("../config/database");

module.exports = {
    async getAll() {
        const result = await db.query('SELECT * FROM bookings')
        return result.rows[0]
    },
    
    async getAllbyID(id) {
        const result = await db.query('SELECT * FROM bookings WHERE id = $1',
        [id]
        );
        return result.rows[0]
    },
    
    async create(rooms_id, user_id, start_time, end_time) {
    const result = await db.query(
        'INSERT INTO bookings (rooms_id, user_id, start_time, end_time) VALUES ($1, $2, $3, $4) RETURNING *',
        [rooms_id, user_id, start_time, end_time]
    );
    return result.rows[0];
    },

    
    async update(id, rooms_id, user_id, start_time, end_time) {
    const result = await db.query(
        'UPDATE bookings SET rooms_id = $1, user_id = $2, start_time = $3, end_time = $4 WHERE id = $5 RETURNING *',
        [rooms_id, user_id, start_time, end_time, id]
    );
    return result.rows[0];
    },
    
    async delete(id) {
        await db.query('DELETE FROM bookings WHERE id = $1', [id]);
    }
}