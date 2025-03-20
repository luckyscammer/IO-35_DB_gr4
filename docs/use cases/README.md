# Модель прецедентів 🗂️

## 📋 Загальна схема

@startuml

actor User as U
actor Manager as M
actor Administrator as A

M --|> U
A --|> M

U --> (Create User)
U --> (Authorize User)
U --> (Edit User)
U --> (Create Project)
U --> (Edit Project)
U --> (Delete Project)

M --> (Create Project)
M --> (Edit Project)
M --> (Delete Project)
M --> (Add User To Project)
M --> (Remove User From Project)
M --> (Create Board)
M --> (Delete Board)

A --> (Delete User)
A --> (Edit User)
A --> (Edit Project)
A --> (Delete Project)
A --> (Add User To Project)
A --> (Block Project)
A --> (Unblock Project)
A --> (Ban User)
A --> (Unban User)
A --> (Edit System Settings)

@enduml

## 🧑‍💻 Користувач

@startuml

actor User as U

U --> (Create User)
U --> (Authorize User)
U --> (Edit User)
U --> (Create Project)
U --> (Edit Project)
U --> (Delete Project)

@enduml

## 🛠️ Адміністратор

@startuml

actor Administrator as A

A --> (Delete User)
A --> (Edit User)
A --> (Edit Project)
A --> (Delete Project)
A --> (Add User To Project)
A --> (Block Project)
A --> (Unblock Project)
A --> (Ban User)
A --> (Unban User)
A --> (Edit System Settings)

@enduml

## 📊 Керівник

@startuml

actor Manager as M

M --> (Create Project)
M --> (Edit Project)
M --> (Delete Project)
M --> (Add User To Project)
M --> (Remove User From Project)
M --> (Create Board)
M --> (Delete Board)

@enduml
