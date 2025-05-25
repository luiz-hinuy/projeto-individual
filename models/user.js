const db = require("./config/database.js");

module.exports = {
    
    async getAll() {
        const result = await db.query('SELECT * FROM users')
        return result.rows[0]
    },

    async getAllbyID(id) {
        const result = await db.query('SELECT * FROM users WHERE id = $1',
            [id]
        );
        return result.rows[0]
    },

    async create(name, email) {
        const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]);
        return result.rows[0]
    },

    async update(id, name, email) {
        const result = await db.query('UPDATE users SET nome = $1, email = $2 WHERE id = $3 RETUNING *',
        [id, name, email]);
        return result.rows[0]
    },

    async delete(id) {
        await db.query('DELETE FROM users WHERE id = $1', [id]);
    }
};