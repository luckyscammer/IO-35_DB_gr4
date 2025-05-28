# Реалізація інформаційного та програмного забезпечення ⭐

## 📝 SQL-скрипт для створення початкового наповнення бази даних

### init.sql

```sql
CREATE TABLE `User` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(64),
    `email` VARCHAR(128),
    `password` VARCHAR(64),
    `avatar` VARCHAR(128),
    `status` VARCHAR(32)
);

CREATE TABLE `Member` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT,
    `project_id` INT,
    `role_id` INT
);

CREATE TABLE `Ban` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT,
    `reason` TEXT,
    `untilDate` DATETIME
);

CREATE TABLE `Settings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT,
    `key` VARCHAR(64),
    `value` TEXT
);

CREATE TABLE `Role` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(32),
    `description` TEXT
);

CREATE TABLE `Permission` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(64)
);

CREATE TABLE `Grant` (
    `role_id` INT,
    `permission_id` INT,
    PRIMARY KEY (`role_id`, `permission_id`)
);

CREATE TABLE `Project` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(64),
    `description` TEXT,
    `creationDate` DATETIME,
    `status` VARCHAR(32)
);

CREATE TABLE `Board` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(64),
    `project_id` INT
);

CREATE TABLE `Block` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `project_id` INT,
    `reason` TEXT,
    `untilDate` DATETIME
);

CREATE TABLE `Task` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(64),
    `description` TEXT,
    `status` VARCHAR(32),
    `startDate` DATE,
    `dueDate` DATE,
    `board_id` INT
);

CREATE TABLE `TaskComment` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `task_id` INT,
    `author_id` INT,
    `content` TEXT,
    `creationDate` DATETIME
);

CREATE TABLE `Assignee` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `task_id` INT,
    `user_id` INT
);

CREATE TABLE `Tag` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(32)
);

CREATE TABLE `TasksTag` (
    `task_id` INT,
    `tag_id` INT,
    PRIMARY KEY (`task_id`, `tag_id`)
);

ALTER TABLE `Member` ADD FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Ban` ADD FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Settings` ADD FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `TaskComment` ADD FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Assignee` ADD FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Member` ADD FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Member` ADD FOREIGN KEY (`role_id`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Grant` ADD FOREIGN KEY (`role_id`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Grant` ADD FOREIGN KEY (`permission_id`) REFERENCES `Permission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Board` ADD FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Block` ADD FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Task` ADD FOREIGN KEY (`board_id`) REFERENCES `Board`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `TaskComment` ADD FOREIGN KEY (`task_id`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Assignee` ADD FOREIGN KEY (`task_id`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `TasksTag` ADD FOREIGN KEY (`task_id`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `TasksTag` ADD FOREIGN KEY (`tag_id`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
```

### seed.sql

```sql
BEGIN;

INSERT INTO `Permission` (`name`) VALUES
  ('CREATE_USER'),
  ('AUTHORIZE_USER'),
  ('EDIT_USER'),
  ('DELETE_USER'),
  ('CREATE_PROJECT'),
  ('EDIT_PROJECT'),
  ('DELETE_PROJECT'),
  ('ADD_USER_TO_PROJECT'),
  ('REMOVE_USER_FROM_PROJECT'),
  ('CREATE_BOARD'),
  ('DELETE_BOARD'),
  ('BAN_USER'),
  ('UNBAN_USER'),
  ('EDIT_SYSTEM_SETTINGS'),
  ('CREATE_TASK'),
  ('EDIT_TASK'),
  ('DELETE_TASK'),
  ('CREATE_COMMENT'),
  ('EDIT_COMMENT'),
  ('DELETE_COMMENT');

INSERT INTO `Role` (`name`, `description`) VALUES
  ('USER', 'Basic user access'),
  ('MANAGER', 'Project and team management'),
  ('ADMINISTRATOR', 'Full system access');

-- USER (role_id = 1)
INSERT INTO `Grant` (`role_id`, `permission_id`) VALUES
  (1, 1),  -- CREATE_USER
  (1, 2),  -- AUTHORIZE_USER
  (1, 3),  -- EDIT_USER
  (1, 5),  -- CREATE_PROJECT
  (1, 6),  -- EDIT_PROJECT
  (1, 7);  -- DELETE_PROJECT

-- MANAGER (role_id = 2)
INSERT INTO `Grant` (`role_id`, `permission_id`) VALUES
  (2, 8),   -- ADD_USER_TO_PROJECT
  (2, 9),   -- REMOVE_USER_FROM_PROJECT
  (2, 10),  -- CREATE_BOARD
  (2, 11),  -- DELETE_BOARD

  (2, 15),  -- CREATE_TASK
  (2, 16),  -- EDIT_TASK
  (2, 17),  -- DELETE_TASK
  (2, 18),  -- CREATE_COMMENT
  (2, 19),  -- EDIT_COMMENT
  (2, 20);  -- DELETE_COMMENT

-- ADMINISTRATOR (role_id = 3)
INSERT INTO `Grant` (`role_id`, `permission_id`) VALUES
  (3, 4),   -- DELETE_USER
  (3, 6),   -- EDIT_PROJECT
  (3, 7),   -- DELETE_PROJECT
  (3, 8),   -- ADD_USER_TO_PROJECT
  (3, 9),   -- REMOVE_USER_FROM_PROJECT
  (3, 12),  -- BAN_USER
  (3, 13),  -- UNBAN_USER
  (3, 14);  -- EDIT_SYSTEM_SETTINGS

INSERT INTO `User` (`name`, `email`, `password`, `avatar`, `status`) VALUES
  ('Ivan Shevchenko', 'ivan@example.com', 'hashed_pass_1', 'https://example.com/ivan.jpg', 'ACTIVE'),
  ('Olha Bondarenko', 'olha@example.com', 'hashed_pass_2', NULL, 'ACTIVE'),
  ('Taras Petrenko', 'taras@example.com', 'hashed_pass_3', 'https://example.com/taras.jpg', 'ACTIVE');

INSERT INTO `Project` (`name`, `description`, `creationDate`, `status`) VALUES
  ('Task Manager App', 'A simple task management system', NOW(), 'ACTIVE');

-- Assuming users 1, 2, 3; roles 1 = USER, 2 = MANAGER, 3 = ADMINISTRATOR
INSERT INTO `Member` (`user_id`, `project_id`, `role_id`) VALUES
  (1, 1, 3),  -- Admin
  (2, 1, 2),  -- Manager
  (3, 1, 1);  -- Regular user

INSERT INTO `Board` (`name`, `project_id`) VALUES
  ('Development', 1),
  ('Design', 1);

INSERT INTO `Task` (`name`, `description`, `status`, `startDate`, `dueDate`, `board_id`) VALUES
  ('Design Login Page', 'UI/UX for login', 'OPEN', '2025-05-01', '2025-05-10', 2),
  ('Implement Auth Logic', 'NodeJS backend', 'IN_PROGRESS', '2025-05-02', '2025-05-12', 1);

INSERT INTO `TaskComment` (`task_id`, `author_id`, `content`, `creationDate`) VALUES
  (1, 2, 'Make sure to align with branding', NOW()),
  (2, 3, 'Need help with backend routing', NOW());

INSERT INTO `Tag` (`name`) VALUES
  ('Urgent'),
  ('UI'),
  ('Backend');

INSERT INTO `TasksTag` (`task_id`, `tag_id`) VALUES
  (1, 1),
  (1, 2),
  (2, 3);

INSERT INTO `Assignee` (`task_id`, `user_id`) VALUES
  (1, 2),
  (2, 3);

INSERT INTO `Ban` (`user_id`, `reason`, `untilDate`) VALUES
  (3, 'Spamming comments', '2025-06-01 00:00:00');

INSERT INTO `Settings` (`user_id`, `key`, `value`) VALUES
  (1, 'dark_mode', 'enabled'),
  (2, 'email_notifications', 'true');

COMMIT;
```

## 🚀 RESTfull сервіс (JavaScript + Express.js)

### .env

```text
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=PLIFFDAX
```

> 💡 **Файл для зберігання конфіденційних налаштувань (логін/пароль до бази даних, імʼя БД, хост тощо).** Завдяки цьому твій код не містить паролів у відкритому доступі, і легко змінювати налаштування між різними середовищами (dev/prod).

### src/app.js

```js
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

> 💡 **Головний файл додатку.** Тут відбувається підключення Express, підключення роутів, налаштування парсерів JSON і запуск сервера на певному порту.

### src/db.js

```js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
```

> 💡 **Модуль для підключення до бази даних.** Імпортує налаштування з `.env` і створює пул зʼєднань із MySQL, який можна використовувати у всіх інших модулях для виконання SQL-запитів.

### src/models/userModel.js

```js
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
```

> 💡 **Модель роботи з даними користувачів (User).** Тут описуються функції для звернення до БД: додавання, отримання, редагування, видалення користувачів. Вся взаємодія з таблицею `User` відбувається саме тут.

### src/controllers/userController.js

```js
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
```

> 💡 **Контролер для обробки HTTP-запитів, повʼязаних із користувачами.** Приймає дані з запиту, викликає відповідні функції моделі (`userModel`), обробляє відповіді й формує відповідь для клієнта (наприклад, успіх або помилку).

### src/routes/userRoutes.js

```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.create);
router.get('/', userController.getAll);
router.put('/:id', userController.edit);
router.delete('/:id', userController.delete);
router.get('/:id', userController.getOne);

module.exports = router;
```

> 💡 **Файл, який описує маршрути (routes) для роботи з користувачами.** Тут визначаються URL-адреси для різних дій (`GET`, `POST`, `PUT`, `DELETE`), і кожен маршрут підключає відповідний метод з контролера.
Підключається у головному `app.js`.

## ☕️ Альтернативна реалізація: RESTful сервіс (Java + Spring Boot)

[DB-RESTfull-service-on-Java](https://github.com/axolotl1k/DB-RESTfull-service-on-Java) — це репозиторій із прикладом створення сучасного RESTful API для роботи з базою даних на основі Java та фреймворка Spring Boot.

> 💡 **Проєкт підготовлено для доповіді на тему:** «Розроблення RESTful сервісу з доступом до бази даних мовою Java»

**👨‍💻 Автори**

- ІО-35 Степанов Олександр Олександрович 
- ІО-35 Слюсар Олександр Андрійович 

**📬 Контакти**

- [@Pliffdax](https://t.me/Pliffdax)
- [@a_x_o_l_o_t_l ](https://t.me/a_x_o_l_o_t_l)