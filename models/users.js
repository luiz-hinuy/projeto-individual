const db = require("../config/database.js");

module.exports = {
    
    async getAll() {
        const result = await db.query('SELECT * FROM users')
        return result.rows
    },

    async getByID(id) {
        const result = await db.query('SELECT * FROM users WHERE id = $1',
            [id]
        );
        return result.rows[0]
    },

    async create(name, email, password) {
        const result = await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]);
        return result.rows[0]
    },

    async update(id, name, email) {
        const result = await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
        [name, email, id]);
        return result.rows[0]
    },

    async delete(id) {
        await db.query('DELETE FROM users WHERE id = $1', [id]);
    }
};