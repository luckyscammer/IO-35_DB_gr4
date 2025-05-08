# Проєктування бази даних ⚗️

## 📦 Модель бізнес-об'єктів

_Містить об'єкти предметної області та їх взаємозв'язки._

@startuml
node User #fdfd96
node Member #fdffb6
node Ban #ffadad
node Settings #ffd6a5

node Role #a0c4ff
node Grant #a0c4ff
node Permission #bdb2ff

node Project #9bf6ff
node Board #9bf6ff
node Block #ffadad

node Task #caffbf
node TaskComment #caffbf
node Tag #caffbf
node TasksTag #caffbf
node Assignee #caffbf

' === User
entity User.id
entity User.name
entity User.email
entity User.password
entity User.avatar
entity User.status
User.id -d-* User
User.name -d-* User
User.email -d-* User
User.password -d-* User
User.avatar -d-* User
User.status -d-* User

' === Role
entity Role.id
entity Role.name
entity Role.description
Role.id -u-* Role
Role.name -u-* Role
Role.description -u-* Role

' === Permission
entity Permission.id
entity Permission.name
Permission.id -u-* Permission
Permission.name -u-* Permission

' === Project
entity Project.id
entity Project.name
entity Project.description
entity Project.creationDate
entity Project.status
Project.id -d-* Project
Project.name -d-* Project
Project.description -d-* Project
Project.creationDate -d-* Project
Project.status -d-* Project

' === Board
entity Board.id
entity Board.name
entity Board.project_id
Board.id -d-* Board
Board.name -d-* Board
Board.project_id -d-* Board

' === Member
entity Member.id
Member.id -l-* Member

' === Task
entity Task.id
entity Task.name
entity Task.description
entity Task.status
entity Task.startDate
entity Task.dueDate
Task.id -l-* Task
Task.name -d-* Task
Task.description -d-* Task
Task.status -d-* Task
Task.startDate -d-* Task
Task.dueDate -d-* Task

' === TaskComment
entity TaskComment.id
entity TaskComment.content
entity TaskComment.creationDate
TaskComment.id -u-* TaskComment
TaskComment.content -u-* TaskComment
TaskComment.creationDate -u-* TaskComment

' === Tag
entity Tag.id
entity Tag.name
Tag.id -u-* Tag
Tag.name -u-* Tag

' === Assignee
entity Assignee.id
Assignee.id -d-* Assignee

' === Block
entity Block.project_id
entity Block.reason
entity Block.untilDate
Block.project_id -d-* Block
Block.reason -d-* Block
Block.untilDate -d-* Block

' === Ban
entity Ban.user_id
entity Ban.reason
entity Ban.untilDate
Ban.user_id -u-* Ban
Ban.reason -u-* Ban
Ban.untilDate -u-* Ban

' === Settings
entity Settings.key
entity Settings.value
Settings.key -u-* Settings
Settings.value -u-* Settings

' === Зв'язки
User "1..1" -r- "0..*" Member
User "1..1" -- "0..*" TaskComment
User "1..1" -l- "0..*" Assignee
User "1..1" -- "0..*" Ban
User "1..1" -- "0..*" Settings

Role "1..1" -u- "0..*" Member
Role "1..1" -- "0..*" Grant
Grant "0..*" -- "1..1" Permission

Project "1..1" -r- "0..*" Member
Project "1..1" -d- "0..*" Board
Project "1..1" -r- "0..*" Block

Board "1..1" -- "0..*" Task

Task "1..1" -- "0..*" TaskComment
Task "1..1" -- "0..*" TasksTag
Task "1..1" -- "0..*" Assignee

Tag "1..1" -u- "0..*" TasksTag

@enduml

---

## 🧩 ER-модель

_Відображає структуру таблиць, типи даних і зв’язки між сутностями на логічному рівні._

> 💡 Візуальна версія згенерована на основі попередньої діаграми бізнес-об'єктів. Таблиці згруповані у домени: користувачі, права доступу, проєкти, задачі.

@startuml
!theme plain

' ============ User Management ============
package "UserManagement" {
entity User {
*id : UUID
--
name : VARCHAR(64)
email : VARCHAR(128)
password : VARCHAR(64)
avatar : VARCHAR(128)
status : VARCHAR(32)
}

entity Member {
*id : UUID
--
user_id : UUID
project_id : UUID
role_id : UUID
}

entity Ban {
*id : UUID
--
user_id : UUID
reason : TEXT
untilDate : DATETIME
}

entity Settings {
*id : UUID
--
user_id : UUID
key : VARCHAR(64)
value : TEXT
}
}

' ============ Permissions =============
package "PermissionManagement" {
entity Role {
*id : UUID
--
name : VARCHAR(32)
description : TEXT
}

entity Grant {
*role_id : UUID
*permission_id : UUID
}

entity Permission {
*id : UUID
--
name : VARCHAR(64)
}
}

' ============ Project Management ============
package "ProjectManagement" {
entity Project {
*id : UUID
--
name : VARCHAR(64)
description : TEXT
creationDate : DATETIME
status : VARCHAR(32)
}

entity Board {
*id : UUID
--
name : VARCHAR(64)
project_id : UUID
}

entity Block {
*id : UUID
--
project_id : UUID
reason : TEXT
untilDate : DATETIME
}
}

' ============ Task Management =============
package "TaskManagement" {
entity Task {
*id : UUID
--
name : VARCHAR(64)
description : TEXT
status : VARCHAR(32)
startDate : DATE
dueDate : DATE
board_id : UUID
}

entity TaskComment {
*id : UUID
--
task_id : UUID
author_id : UUID
content : TEXT
creationDate : DATETIME
}

entity Assignee {
*id : UUID
--
task_id : UUID
user_id : UUID
}

entity Tag {
*id : UUID
--
name : VARCHAR(32)
}

entity TasksTag {
*task_id : UUID
*tag_id : UUID
}
}

' ============ Зв’язки ============
User ||--o{ Member
User ||--o{ Ban
User ||--o{ Settings
User ||--o{ TaskComment
User ||--o{ Assignee

Member }o--|| Project
Member }o--|| Role

Grant }o--|| Role
Grant }o--|| Permission

Project ||--o{ Board
Project ||--o{ Block

Board ||--o{ Task

Task ||--o{ TaskComment
Task ||--o{ Assignee
Task ||--o{ TasksTag

Tag ||--o{ TasksTag

@enduml

---
