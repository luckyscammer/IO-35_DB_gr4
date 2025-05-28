const userModel = require('../models/userModel');

exports.create = async (req, res) => {
  const { name, email, password, avatar, status } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Заповніть всі обовʼязкові поля (name, email, password)' });
  }
  await userModel.create(name, email, password, avatar, status);
  res.status(201).json({ message: 'Користувача додано' });
};

exports.getAll = async (req, res) => {
  const users = await userModel.findAll();
  res.json(users);
};

exports.edit = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, avatar, status } = req.body;
  const fields = {};
  if (name) fields.name = name;
  if (email) fields.email = email;
  if (password) fields.password = password;
  if (avatar) fields.avatar = avatar;
  if (status) fields.status = status;
  if (!Object.keys(fields).length) {
    return res.status(400).json({ error: 'Немає даних для оновлення' });
  }
  await userModel.update(id, fields);
  res.json({ message: 'Користувача оновлено' });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await userModel.delete(id);
  res.json({ message: 'Користувача видалено' });
};

exports.getOne = async (req, res) => {
  const user = await userModel.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'UserNotFoundException' });
  res.json(user);
};

