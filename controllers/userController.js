const Users = require('../models/users');

exports.index = async (req, res) => {
  try {
    const users = await Users.getAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

exports.getByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.getByID(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

exports.store = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
    }

    const newUser = await Users.create(name, email, password);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await Users.update(id, name, email);
    if (!updatedUser) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.getByID(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    await Users.delete(id);
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};