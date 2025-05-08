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

## 📝 RESTfull сервіс для управління даними

