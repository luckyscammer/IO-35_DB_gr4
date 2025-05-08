# Реалізація інформаційного та програмного забезпечення ⭐

## 📝 SQL-скрипт для створення початкового наповнення бази даних

_init.sql_

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

_seed.sql_

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

## 📝 RESTfull сервіс для управління даними

