const db = require('../db');

exports.create = async (name, email, password, avatar, status) => {
  await db.query(
    'INSERT INTO User (name, email, password, avatar, status) VALUES (?, ?, ?, ?, ?)',
    [name, email, password, avatar || null, status || null]
  );
};

exports.findAll = async () => {
  const [rows] = await db.query('SELECT id, name, email, avatar, status FROM User');
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query('SELECT * FROM User WHERE id = ?', [id]);
  return rows[0];
};

exports.update = async (id, fields) => {
  const set = Object.keys(fields).map(key => `${key} = ?`).join(', ');
  const values = [...Object.values(fields), id];
  await db.query(`UPDATE User SET ${set} WHERE id = ?`, values);
};

exports.delete = async (id) => {
  await db.query('DELETE FROM User WHERE id = ?', [id]);
};
