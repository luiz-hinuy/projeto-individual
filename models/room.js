const db = require("./config/database.js");

module.exports = {
    
    async getAll() {
        const result = await db.query('SELECT * FROM rooms')
        return result.rows[0]
    },

    async getAllbyID(id) {
        const result = await db.query('SELECT * FROM rooms WHERE id = $1',
            [id]
        );
        return result.rows[0]
    },

    async create(number, location) {
        const result = await db.query('INSERT INTO rooms (number, location) VALUES ($1, $2) RETURNING *',
        [number, location]);
        return result.rows[0]
    },

    async delete(id) {
        await db.query('DELETE FROM rooms WHERE id = $1', [id]);
    }
};