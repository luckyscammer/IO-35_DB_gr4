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

## 📝 Сценарії використання

@startuml

actor User
actor System

User -> System: Click "Register"
User -> System: Fill registration form (username, email, password)
User -> System: Click "Create"
System -> System: Validate input
System -> System: Create user account
System -> User: Automatically log in

@enduml


| **ID**           | CreateUser |
|------------------|------------|
| **НАЗВА**        | Створити користувача |
| **УЧАСНИКИ**     | Користувач, система |
| **ПЕРЕДУМОВИ**   | Система не зареєструвала користувача |
| **РЕЗУЛЬТАТ**    | Система створює обліковий запис користувача |
| **ВИКЛЮЧНІ СИТУАЦІЇ** | - Користувач не ввів ім'я користувача (**NullUsernameException**) <br> - Користувач не ввів пошту (**NullEmailException**) <br> - Користувач не ввів пароль (**NullPasswordException**) <br> - Користувач з таким ім'ям вже існує (**UserAlreadyExistsException**) <br> - Користувач вказав неправильний формат пошти (**WrongEmailFormatException**) <br> - Користувач ввів недостатньо сильний пароль (**WeakPasswordException**) |
| **ОСНОВНИЙ СЦЕНАРІЙ** | 1. Користувач натискає на кнопку "Зареєструватись". <br> 2. Користувач заповнює поля реєстрації (ім'я користувача, пошта, пароль). <br> 3. Користувач натискає на кнопку "Створити". <br> 4. Система перевіряє введені поля на валідність. <br> 5. Система створює обліковий запис користувача. <br> 6. Користувач автоматично входить у систему. |
