import{_ as t,c as r,o,ah as n}from"./chunks/framework.C_vVbgOK.js";const u=JSON.parse('{"title":"Запити зацікавлений осіб 🔍","description":"","frontmatter":{},"headers":[],"relativePath":"requirements/stakeholders-needs.md","filePath":"requirements/stakeholders-needs.md"}'),e={name:"requirements/stakeholders-needs.md"},s=n('<h1 id="запити-зацікавлении-осіб-🔍" tabindex="-1">Запити зацікавлений осіб 🔍 <a class="header-anchor" href="#запити-зацікавлении-осіб-🔍" aria-label="Permalink to &quot;Запити зацікавлений осіб 🔍&quot;">​</a></h1><h2 id="📖-вступ" tabindex="-1">📖 Вступ <a class="header-anchor" href="#📖-вступ" aria-label="Permalink to &quot;📖 Вступ&quot;">​</a></h2><p>Система управління проєктами забезпечує системний підхід до планування, виконання та оцінки проєктів на всіх етапах їх реалізації – від початку до завершення. Розробка системи потребує детального планування та узгодження всіх вимог і специфікацій.</p><p>Цей документ містить всебічний огляд вимог до системи, описуючи всі ключові аспекти, необхідні для її успішної реалізації. У ньому подано <a href="#📚-основні-визначення-та-скорочення">основні визначення та скорочення</a>, які забезпечують точне розуміння вимог, а також наведено <a href="#🔗-посилання">посилання на зовнішні джерела</a>, що використовувалися для аналізу предметної області.</p><p>Структура документа викладена в розділі <a href="#📝-короткий-зміст">«Короткий зміст»</a>, де представлено огляд усіх наступних розділів. Один із ключових розділів присвячений <a href="#⚙️-характеристика-ділових-процесів">характеристиці ділових процесів</a>, у якому розглядаються як зовнішні чинники, що впливають на бізнес, так і внутрішні, а також їх взаємодія. Тут подано детальні бізнес-сценарії, що ілюструють основні процеси всередині системи.</p><p>Крім того, у розділі <a href="#🏷️-короткий-огляд-продукту">«Короткий огляд продукту»</a> визначено межі системи та категорії її користувачів. У документі проаналізовано <a href="#🛠️-функціональність">функціональні вимоги</a>, <a href="#✅-практичність">практичність</a>, <a href="#🛡️-надійність">надійність</a>, <a href="#🚀-продуктивність">продуктивність</a> і <a href="#⚡-експлуатаціина-придатність">експлуатаційна придатність</a>, що дозволяє оцінити основні параметри, необхідні для забезпечення високої якості та ефективності роботи системи.</p><h3 id="🎯-мета" tabindex="-1">🎯 Мета <a class="header-anchor" href="#🎯-мета" aria-label="Permalink to &quot;🎯 Мета&quot;">​</a></h3><p>Метою створення системи управління проєктами є забезпечення ефективного планування, координації та контролю виконання проєктів, оптимізація робочих процесів та підвищення продуктивності команди.</p><h3 id="🌍-контекст" tabindex="-1">🌍 Контекст <a class="header-anchor" href="#🌍-контекст" aria-label="Permalink to &quot;🌍 Контекст&quot;">​</a></h3><p>Цей документ містить детальний опис вимог до розроблюваного сервісу, що спрямований на спрощення робочих процесів та виконання завдань для користувачів. Визначення вимог зацікавлених сторін є ключовим етапом, що допомагає врахувати потреби та очікування, забезпечуючи відповідність функціональності системи реальним запитам.</p><p>Документ слугує орієнтиром для всіх учасників розробки, описуючи можливості, особливості та ключові характеристики продукту.</p><h3 id="📚-основні-визначення-та-скорочення" tabindex="-1">📚 Основні визначення та скорочення <a class="header-anchor" href="#📚-основні-визначення-та-скорочення" aria-label="Permalink to &quot;📚 Основні визначення та скорочення&quot;">​</a></h3><p><a href="https://openarchive.nure.ua/server/api/core/bitstreams/0eee892b-ab08-4f18-93af-62a20cd7379c/content" target="_blank" rel="noreferrer">FURPS</a> — модель, що позначає такі категорії вимог до якості ПЗ:</p><ul><li><strong>Functionality</strong> (Функціональність) – особливості, можливості, безпека;</li><li><strong>Usability</strong> (Практичність) – людський фактор, ергономічність, призначена для користувача документація ;</li><li><strong>Reliability</strong> (Надійність) – частота відмов, відновлення інформації, прогнозованість;</li><li><strong>Performance</strong> (Продуктивність) – час відгуку, пропускна здатність, точність, доступність, використання ресурсів;</li><li><strong>Supportability</strong> (Експлуатаційна придатність) – тестованість, розширюваність, адаптованість, супроводуваність, сумісність, конфігурованість, обслуговуваність, вимоги до установки, що локалізується.</li></ul><p><a href="https://ukrayinska.libretexts.org/%D0%91%D1%96%D0%B7%D0%BD%D0%B5%D1%81/%D0%91%D1%96%D0%B7%D0%BD%D0%B5%D1%81/%D0%92%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8%D0%B9_%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%3A_%D0%92%D1%81%D1%82%D1%83%D0%BF_%D0%B4%D0%BE_%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81%D1%83_(Lumen)/01%3A_%D0%A0%D0%BE%D0%BB%D1%8C_%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81%D1%83/1.06%3A_%D0%97%D0%B0%D1%86%D1%96%D0%BA%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%96_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%B8" target="_blank" rel="noreferrer">Зацікавлена особа</a> — це фізична особа або група, яка має законний інтерес до компанії, організації чи бізнесу; Стенфордський науково-дослідний інститут визначає зацікавлені сторони як «ті групи, без підтримки яких організація перестане існувати. Зацікавлені сторони можуть впливати або впливати на дії (або бездіяльність) бізнесу, і вони можуть існувати як всередині, так і поза ним.</p><p><a href="https://nbookpart.com.ua/oblikovii-zapis-sho-ce-take-prostimi-slovami/" target="_blank" rel="noreferrer">Обліковий запис</a> — це технологія для з&#39;єднання користувача та інформаційного сервісу та/або комп&#39;ютерної мережі.</p><p><a href="https://wezom.com.ua/ua/blog/chto-takoe-ui-i-kak-polzovatelskij-interfejs-vliyaet-na-prodazhi-internet-magazina" target="_blank" rel="noreferrer">Інтерфейс користувача</a> — це візуалізація компонентів сайта чи додатка, з якими будуть безпосередньо взаємодіяти користувачі.</p><p><a href="https://www.maxzosim.com/unifikovana-mova-modeluvannia/" target="_blank" rel="noreferrer">UML (Unified Modeling Language)</a> — це мова моделювання загального призначення, яка призначена для забезпечення стандартного способу візуалізації проектування системи.</p><h3 id="🔗-посилання" tabindex="-1">🔗 Посилання <a class="header-anchor" href="#🔗-посилання" aria-label="Permalink to &quot;🔗 Посилання&quot;">​</a></h3><ol><li><a href="https://openarchive.nure.ua/server/api/core/bitstreams/0eee892b-ab08-4f18-93af-62a20cd7379c/content" target="_blank" rel="noreferrer">FURPS</a>;</li><li><a href="https://ukrayinska.libretexts.org/%D0%91%D1%96%D0%B7%D0%BD%D0%B5%D1%81/%D0%91%D1%96%D0%B7%D0%BD%D0%B5%D1%81/%D0%92%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8%D0%B9_%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%3A_%D0%92%D1%81%D1%82%D1%83%D0%BF_%D0%B4%D0%BE_%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81%D1%83_(Lumen)/01%3A_%D0%A0%D0%BE%D0%BB%D1%8C_%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81%D1%83/1.06%3A_%D0%97%D0%B0%D1%86%D1%96%D0%BA%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%96_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%B8" target="_blank" rel="noreferrer">Зацікавлена особа</a>;</li><li><a href="https://nbookpart.com.ua/oblikovii-zapis-sho-ce-take-prostimi-slovami/" target="_blank" rel="noreferrer">Обліковий запис</a>;</li><li><a href="https://wezom.com.ua/ua/blog/chto-takoe-ui-i-kak-polzovatelskij-interfejs-vliyaet-na-prodazhi-internet-magazina" target="_blank" rel="noreferrer">Інтерфейс користувача</a>;</li><li><a href="https://www.maxzosim.com/unifikovana-mova-modeluvannia/" target="_blank" rel="noreferrer">UML (Unified Modeling Language)</a>.</li></ol><h2 id="📝-короткии-зміст" tabindex="-1">📝 Короткий зміст <a class="header-anchor" href="#📝-короткии-зміст" aria-label="Permalink to &quot;📝 Короткий зміст&quot;">​</a></h2><ul><li><a href="#⚙️-характеристика-ділових-процесів">Характеристика ділових процесів</a>;</li><li><a href="#🏷️-короткий-огляд-продукту">Короткий огляд продукту</a>;</li><li><a href="#🛠️-функціональність">Функціональність</a>;</li><li><a href="#✅-практичність">Практичність</a>;</li><li><a href="#🛡️-надійність">Надійність</a>;</li><li><a href="#🚀-продуктивність">Продуктивність</a>;</li><li><a href="#⚡-експлуатаційна-придатність">Експлуатаційна придатність</a>.</li></ul><h2 id="⚙️-характеристика-ділових-процесів" tabindex="-1">⚙️ Характеристика ділових процесів <a class="header-anchor" href="#⚙️-характеристика-ділових-процесів" aria-label="Permalink to &quot;⚙️ Характеристика ділових процесів&quot;">​</a></h2><p>Для ефективного функціонування системи управління проєктами необхідно чітко визначити взаємодію між внутрішніми та зовнішніми факторами, що впливають на її роботу. Вони поділяються на <strong>бізнес-акторів</strong> (зовнішні фактори) та <strong>бізнес-робітників</strong> (внутрішні фактори).</p><p><strong>Бізнес-актори системи:</strong></p><ul><li>Користувач системи – фізична або юридична особа, яка використовує платформу для управління завданнями та проєктами. Залежно від рівня доступу, користувачі поділяються на:</li><li>Учасник проєкту – користувач, який має доступ до конкретного проєкту та може створювати, редагувати та виконувати завдання;</li><li>Керівник проєкту – має розширені можливості: окрім базових дій, може управляти структурою проєкту, налаштовувати дошки та контролювати склад команди.</li></ul><p><strong>Бізнес-робітники системи:</strong></p><ul><li>Адміністратор системи – відповідає за загальне управління платформою, має найвищий рівень доступу. Виконує такі функції:</li><li>Налаштування прав користувачів та управління доступом;</li><li>Моніторинг стабільності роботи системи та усунення технічних несправностей;</li><li>Контроль безпеки, блокування зловмисних дій та резервне копіювання даних.</li></ul><p>Проаналізувавши системи управління проєктами, можна описати наступні бізнес-сценарії вазємодії бізнес-акторів і бізнес-робітників із системою:</p><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>CreateUser</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Створити користувача</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Користувач, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>Система не зареєструвала користувача</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Обліковий запис користувача</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- Користувач не ввів ім&#39;я користувача (<strong>NullUsernameException</strong>) <br> - Користувач не ввів пошту (<strong>NullEmailException</strong>) <br> - Користувач не ввів пароль (<strong>NullPasswordException</strong>) <br> - Користувач з таким ім&#39;ям вже існує (<strong>UserAlreadyExistsException</strong>) <br> - Користувач вказав неправильний формат пошти (<strong>WrongEmailFormatException</strong>) <br> - Користувач ввів недостатньо сильний пароль (<strong>WeakPasswordException</strong>)</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Користувач натискає на кнопку &quot;Зареєструватись&quot;. <br> 2. Користувач заповнює поля реєстрації (ім&#39;я користувача, пошта, пароль). <br> 3. Користувач натискає на кнопку &quot;Створити&quot;. <br> 4. Система перевіряє введені поля на валідність. <br> 5. Система створює обліковий запис користувача. <br> 6. Користувач автоматично входить у систему.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>AuthorizeUser</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Авторизувати користувача</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Користувач, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>Система зареєструвала користувача</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Система авторизувала користувача</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- Користувач ввів неправильний пароль (<strong>InvalidPasswordException</strong>) <br> - Користувач ввів неправильне ім&#39;я користувача (<strong>InvalidUsernameException</strong>) <br> - Система заблокувала користувача (<strong>UserBannedException</strong>)</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Користувач вводить ім&#39;я користувача і пароль. <br> 2. Система перевіряє введені дані (<strong>InvalidPasswordException</strong> або <strong>InvalidUsernameException</strong>). <br> 3. Система перевіряє статус користувача (<strong>UserBannedException</strong>). <br> 4. Користувач успішно входить у систему.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>EditUser</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Редагувати користувача</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Користувач, адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>Система авторизувала користувача або адміністратора</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Система змінила дані користувача</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- Система не знайшла користувача (<strong>UserNotFoundException</strong>) <br> - Користувач має недостатньо прав для редагування (<strong>InsufficientPermissionsException</strong>) <br> - Користувач ввів дані у неправильному форматі (<strong>InvalidDataFormatException</strong>)</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Адміністратор або користувач відкриває профіль користувача. <br> 2. Користувач або адміністратор змінює потрібні поля. <br> 3. Система перевіряє права (<strong>InsufficientPermissionsException</strong>). <br> 4. Система перевіряє введені дані на правильність (<strong>InvalidDataFormatException</strong>). <br> 5. Система зберігає оновлені дані користувача.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>DeleteUser</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Видалити користувача</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>Система авторизувала адміністратора</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Система видаляє користувача</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- Система не знайшла користувача (<strong>UserNotFoundException</strong>) <br> - Користувач має недостатньо прав для видалення (<strong>InsufficientPermissionsException</strong>)</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Адміністратор вибирає користувача для видалення. <br> 2. Адміністратор натискає кнопку &quot;Видалити користувача&quot;. <br> 3. Система перевіряє права адміністратора (<strong>InsufficientPermissionsException</strong>). <br> 4. Система видаляє користувача (<strong>UserNotFoundException</strong>).</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>CreateProject</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Створити проект</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Користувач, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>Система авторизувала користувача</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Система створює проєкт та надає права керівника проєкту користувачу</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- Користувач не ввів назву проєкту (<strong>NullProjectNameException</strong>) <br> - Користувач ввів назву проєкту у неправильному форматі (<strong>InvalidProjectNameException</strong>)</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Користувач натискає кнопку &quot;Створити проект&quot;. <br> 2. Користувач заповнює форму (назва проекту). <br> 3. Система перевіряє дані на валідність. <br> 4. Система створює новий проект. <br> 5. Система надає права керівника проєкту користувачу. <br> 6. Користувач отримує підтвердження про створення проекту.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>EditProject</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Редагувати проект</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Користувач (керівник проєкту), адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Система авторизувала користувача <br> - Користувач має права на редагування проекту</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Система змінює дані проєкту</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- Система не знайшла проєкт (<strong>ProjectNotFoundException</strong>) <br> - Користувач має недостатньо прав для редагування (<strong>AccessDeniedException</strong>)</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Користувач відкриває проект. <br> 2. Користувач натискає кнопку &quot;Редагувати&quot;. <br> 3. Користувач вносить зміни. <br> 4. Система перевіряє права на редагування. <br> 5. Система зберігає зміни.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>DeleteProject</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Видалити проект</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Користувач (керівник проєкту), адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Система авторизувала користувача <br> - Користувач має права на видалення проєкту</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Система видаляє проєкт</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- Система не знайшла проєкт (<strong>ProjectNotFoundException</strong>) <br> - Користувач має недостатньо прав для видалення (<strong>AccessDeniedException</strong>)</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Користувач вибирає проект для видалення. <br> 2. Користувач натискає кнопку &quot;Видалити&quot;. <br> 3. Система перевіряє права на видалення. <br> 4. Система видаляє проект.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>AddUserToProject</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Додати учасника до проекту</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Користувач (керівник проєкту), адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Система авторизувала користувача <br> - Користувач має права на редагування проекту</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Система додає учасника до проєкту</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- Система не знайшла користувача (<strong>UserNotFoundException</strong>) <br> - Система не знайшла проєкт (<strong>ProjectNotFoundException</strong>) <br> - Користувач має недостатньо прав для додавання учасника (<strong>AccessDeniedException</strong>)</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Користувач відкриває проект. <br> 2. Користувач натискає кнопку &quot;Додати учасника&quot;. <br> 3. Користувач вводить дані нового учасника. <br> 4. Система перевіряє права на додавання учасника. <br> 5. Система додає учасника до проекту.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>RemoveUserFromProject</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Видалити користувача з проєкту</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Менеджер, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Користувач є учасником проєкту</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Видалений член проєкту</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- <strong>RemoveUserFromProject_WrongUsername_EXC</strong> – менеджер ввів неправильне ім&#39;я користувача <br> - <strong>RemoveUserFromProject_CancelButton_EXC</strong> – менеджер натиснув кнопку &quot;Відміна&quot;</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Менеджер переходить у розділ &quot;Проєкти&quot;. <br> 2. Менеджер обирає проєкт і натискає кнопку &quot;Видалити користувача&quot;. <br> 3. Система відкриває форму для введення ім&#39;я користувача. <br> 4. Менеджер вводить ім&#39;я користувача (<strong>можлива RemoveUserFromProject_WrongUsername_EXC</strong>). <br> 5. Менеджер натискає кнопку &quot;Видалити&quot; (<strong>можлива RemoveUserFromProject_CancelButton_EXC</strong>). <br> 6. Система видаляє користувача з проєкту. <br> 7. Система закриває форму. <br> 8. Система показує повідомлення, що користувач успішно видалений з обраного проєкту.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>CreateBoard</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Створити дошку</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Менеджер, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Менеджер авторизований <br> - Менеджер є членом проєкту</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Нова дошка у проєкті</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- <strong>CreateBoard_NoName_EXC</strong> – менеджер не вказав назву дошки <br> - <strong>CreateBoard_ExistingName_EXC</strong> – менеджер ввів ім&#39;я дошки, що вже зайнято <br> - <strong>CreateBoard_CancelButton_EXC</strong> – менеджер натиснув кнопку &quot;Відміна&quot;</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Менеджер обирає проєкт і натискає на кнопку &quot;Створити дошку&quot;. <br> 2. Система відкриває форму із полями інформації про дошку (<strong>можлива CreateBoard_CancelButton_EXC</strong>). <br> 3. Менеджер заповнює інформацію про дошку: вказує назву та опис. <br> 4. Менеджер натискає кнопку &quot;Створити&quot;. <br> 5. Система перевіряє на валідність інформацію про дошку (<strong>можливі CreateBoard_NoName_EXC та CreateBoard_ExistingName_EXC</strong>). <br> 6. Система створює нову дошку у проєкті.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>DeleteBoard</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Видалити дошку</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Менеджер, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Менеджер має дошку у проєкті <br> - Система містить інформацію про дошку для видалення</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Видалена дошка</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- <strong>DeleteBoard_NoRights_EXC</strong> – менеджер не має прав на видалення обраної дошки <br> - <strong>DeleteBoard_InvalidName_EXC</strong> – менеджер вказав ім&#39;я дошки, що не збігається з реальним <br> - <strong>DeleteBoard_CancelButton_EXC</strong> – менеджер натиснув кнопку &quot;Відміна&quot;</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Менеджер переходить у розділ &quot;Дошки&quot; та обирає потрібну для видалення дошку. <br> 2. Менеджер натискає кнопку &quot;Видалити дошку&quot;. <br> 3. Система перевіряє права менеджера на видалення обраної дошки (<strong>можлива DeleteBoard_NoRights_EXC</strong>). <br> 4. Система відкриває форму підтвердження видалення дошки. <br> 5. Менеджер вводить назву дошки для підтвердження процесу видалення (<strong>можлива DeleteBoard_InvalidName_EXC</strong>). <br> 6. Менеджер натискає кнопку &quot;Видалити дошку&quot; (<strong>можлива DeleteBoard_CancelButton_EXC</strong>). <br> 7. Система видаляє дошку з проєкту.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>BlockProject</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Заблокувати проєкт</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Адміністратор авторизований <br> - Система містить дані про проєкт <br> - Проєкт порушує умови використання системи</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Заблокований проєкт</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- <strong>BlockProject_ProjectHasBeenRemoved_EXC</strong> – проєкт видалено з системи <br> - <strong>BlockProject_ProjectHasBeenBlocked_EXC</strong> – проєкт вже заблоковано <br> - <strong>BlockProject_CancelButton_EXC</strong> – адміністратор натиснув кнопку &quot;Відміна&quot;</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Адміністратор переходить у розділ &quot;Проєкти&quot; та вибирає потрібний для блокування проєкт. <br> 2. Адміністратор натискає кнопку &quot;Заблокувати проєкт&quot;. <br> 3. Система відкриває форму із параметрами блокування проєкту. <br> 4. Адміністратор заповнює форму, вказуючи причину та термін дії блокування. <br> 5. Адміністратор натискає кнопку &quot;Підтвердити&quot; (<strong>можлива BlockProject_CancelButton_EXC</strong>). <br> 6. Система перевіряє валідність обраного адміністратором проєкту (<strong>можливі BlockProject_ProjectHasBeenRemoved_EXC, BlockProject_ProjectHasBeenBlocked_EXC</strong>). <br> 7. Система здійснює операцію блокування й повідомляє менеджера цього проєкту та адміністратора про заблокований проєкт.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>UnblockProject</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Розблокувати проєкт</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Адміністратор авторизований <br> - Проєкт заблокований в системі</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Розблокований проєкт</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- <strong>UnblockProject_ProjectHasBeenRemoved_EXC</strong> – проєкт видалено з системи <br> - <strong>UnblockProject_ProjectHasBeenUnblocked_EXC</strong> – проєкт вже розблоковано <br> - <strong>UnblockProject_CancelButton_EXC</strong> – адміністратор натиснув кнопку &quot;Відміна&quot;</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Адміністратор переходить у розділ &quot;Заблоковані проєкти&quot; та вибирає потрібний для розблокування проєкт. <br> 2. Адміністратор натискає на кнопку &quot;Розблокувати проєкт&quot;. <br> 3. Адміністратор натискає кнопку &quot;Підтвердити&quot; (<strong>можлива UnblockProject_CancelButton_EXC</strong>). <br> 4. Система перевіряє валідність обраного адміністратором проєкту (<strong>можливі UnblockProject_ProjectHasBeenRemoved_EXC, UnblockProject_ProjectHasBeenUnblocked_EXC</strong>). <br> 5. Система здійснює операцію розблокування й повідомляє менеджера цього проєкту та адміністратора про успішно розблокований проєкт.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>BanUser</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Заблокувати користувача</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Користувач багаторазово неправильно вводить пароль <br> - Адміністратор виявив підозрілу активність користувача <br> - Користувач порушує умови використання системи</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Заблокований користувач</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- <strong>BanUser_NoMatchingUser_EXC</strong> – введені дані не відповідають жодному користувачеві <br> - <strong>BanUser_UserHasBeenRemoved_EXC</strong> – користувача видалено з системи <br> - <strong>BanUser_UserHasBeenBanned_EXC</strong> – користувача вже заблоковано <br> - <strong>BanUser_CancelButton_EXC</strong> – адміністратор натиснув кнопку &quot;Відміна&quot;</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Адміністратор фіксує підозрілу активність користувача. <br> 2. Адміністратор заповнює спеціальну форму для блокування, вказуючи причину та термін дії блокування. <br> 3. Адміністратор натискає кнопку &quot;Підтвердити&quot; (<strong>можлива BanUser_CancelButton_EXC</strong>). <br> 4. Система перевіряє валідність введених адміністратором даних (<strong>можливі BanUser_NoMatchingUser_EXC, BanUser_UserHasBeenRemoved_EXC, BanUser_UserHasBeenBanned_EXC</strong>). <br> 5. Система виконує блокування користувача і повідомляє його про це.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>UnbanUser</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Розблокувати користувача</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Користувач заблокований</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Розблокований користувач</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- <strong>UnbanUser_NoMatchingUser_EXC</strong> – введені дані не відповідають жодному користувачеві <br> - <strong>UnbanUser_UserHasBeenRemoved_EXC</strong> – користувача видалено з системи <br> - <strong>UnbanUser_UserHasBeenUnbanned_EXC</strong> – користувача вже розблоковано <br> - <strong>UnbanUser_CancelButton_EXC</strong> – адміністратор натиснув кнопку &quot;Відміна&quot;</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Адміністратор фіксує потрібного користувача. <br> 2. Адміністратор натискає на кнопку &quot;Розблокувати користувача&quot;. <br> 3. Адміністратор натискає кнопку &quot;Підтвердити&quot; (<strong>можлива UnbanUser_CancelButton_EXC</strong>). <br> 4. Система перевіряє валідність введених адміністратором даних (<strong>можливі UnbanUser_NoMatchingUser_EXC, UnbanUser_UserHasBeenRemoved_EXC, UnbanUser_UserHasBeenUnbanned_EXC</strong>). <br> 5. Система виконує розблокування користувача і повідомляє його про це.</td></tr></tbody></table><table tabindex="0"><thead><tr><th><strong>ID</strong></th><th>EditSystemSettings</th></tr></thead><tbody><tr><td><strong>НАЗВА</strong></td><td>Редагувати налаштування системи</td></tr><tr><td><strong>УЧАСНИКИ</strong></td><td>Адміністратор, система</td></tr><tr><td><strong>ПЕРЕДУМОВИ</strong></td><td>- Адміністратор авторизований</td></tr><tr><td><strong>РЕЗУЛЬТАТ</strong></td><td>Нові налаштування системи</td></tr><tr><td><strong>ВИКЛЮЧНІ СИТУАЦІЇ</strong></td><td>- <strong>EditSystemSettings_InvalidData_EXC</strong> – адміністратор ввів невалідні дані <br> - <strong>EditSystemSettings_CancelButton_EXC</strong> – адміністратор натиснув кнопку &quot;Відміна&quot;</td></tr><tr><td><strong>ОСНОВНИЙ СЦЕНАРІЙ</strong></td><td>1. Адміністратор входить в систему. <br> 2. Адміністратор обирає опцію &quot;Редагувати налаштування системи&quot;. <br> 3. Система відкриває форму зміни налаштувань системи (<strong>можлива EditSystemSettings_CancelButton_EXC</strong>). <br> 4. Адміністратор змінює налаштування системи (<strong>можлива EditSystemSettings_InvalidData_EXC</strong>). <br> 5. Адміністратор натискає кнопку &quot;Зберегти зміни&quot;. <br> 6. Система зберігає змінені налаштування.</td></tr></tbody></table><h2 id="🏷️-короткии-огляд-продукту" tabindex="-1">🏷️ Короткий огляд продукту <a class="header-anchor" href="#🏷️-короткии-огляд-продукту" aria-label="Permalink to &quot;🏷️ Короткий огляд продукту&quot;">​</a></h2><p><strong>PLIFFDAX</strong> — це ефективний та зручний інструмент для організації робочих процесів, що поєднує гнучкість, продуктивність і безпеку. Ця система розроблена для оптимізації планування, координації та контролю виконання завдань як у технічних, так і нетехнічних командах. Завдяки сучасному інтерфейсу, розширеним аналітичним можливостям та інтеграції з популярними сервісами, наша платформа забезпечує високий рівень продуктивності та зручності використання.</p><h2 id="🛠️-функціональність" tabindex="-1">🛠️ Функціональність <a class="header-anchor" href="#🛠️-функціональність" aria-label="Permalink to &quot;🛠️ Функціональність&quot;">​</a></h2><p><strong>Основний функціонал системи складається з</strong></p><ol><li><strong>Управління проєктами та завданнями</strong>: створення, редагування та видалення проєктів і завдань; визначення дедлайнів, пріоритетів та відповідальних осіб.</li><li><strong>Спільна робота та комунікація</strong>: коментарі до завдань і система обговорень; призначення ролей і рівнів доступу.</li><li><strong>Відстеження прогресу</strong>: автоматичні звіти про хід виконання завдань.</li><li><strong>Безпека</strong>: автентифікація користувачів та керування дозволами.</li></ol><h3 id="🖥️-інтерфеис-користувача" tabindex="-1">🖥️ Інтерфейс користувача <a class="header-anchor" href="#🖥️-інтерфеис-користувача" aria-label="Permalink to &quot;🖥️ Інтерфейс користувача&quot;">​</a></h3><ul><li>Створення, редагування та закриття завдань;</li><li>Додавання коментарів, вкладень та тегів;</li><li>Вбудований чат для обговорення завдань;</li><li>Особисті звіти про виконані завдання та прогрес;</li><li>Відображення списку проєктів і завдань, що належать користувачеві;</li><li>Фільтрація та сортування завдань за статусом, пріоритетом та дедлайнами.</li></ul><h3 id="🔑-інтерфеис-адміністратора" tabindex="-1">🔑 Інтерфейс адміністратора <a class="header-anchor" href="#🔑-інтерфеис-адміністратора" aria-label="Permalink to &quot;🔑 Інтерфейс адміністратора&quot;">​</a></h3><ul><li>Додавання, редагування та видалення акаунтів;</li><li>Призначення ролей та рівнів доступу;</li><li>Перегляд активності користувачів та історії змін;</li><li>Генерація звітів про використання системи;</li><li>Можливість відновлення даних у разі збоїв;</li><li>Конфігурація параметрів безпеки та політик доступу.</li></ul><h3 id="👨‍💼-інтерфеис-керівника-проєкту" tabindex="-1">👨‍💼 Інтерфейс керівника проєкту <a class="header-anchor" href="#👨‍💼-інтерфеис-керівника-проєкту" aria-label="Permalink to &quot;👨‍💼 Інтерфейс керівника проєкту&quot;">​</a></h3><ul><li>Створення, редагування та архівація проєктів;</li><li>Призначення учасників і ролей у проєкті;</li><li>Перегляд продуктивності команди та аналіз навантаження;</li><li>Автоматична генерація звітів про хід виконання проєкту;</li><li>Оцінка часу, витраченого на виконання завдань;</li><li>Взаємодія з командою через коментарі та повідомлення;</li><li>Визначення ключових пріоритетів і встановлення дедлайнів.</li></ul><h2 id="✅-практичність" tabindex="-1">✅ Практичність <a class="header-anchor" href="#✅-практичність" aria-label="Permalink to &quot;✅ Практичність&quot;">​</a></h2><ol><li>Мінімалістичний та логічно структурований дизайн, простота навігації.</li><li>Індивідуальні налаштування робочого простору для кожного користувача, динамічне коригування пріоритетів і термінів у реальному часі.</li><li>Автоматичні звіти про продуктивність команди та виконані завдання, прогнозування ризиків і аналіз ефективності проєктів.</li><li>Вбудований чат і система коментарів для швидкого обговорення завдань.</li><li>Двофакторна автентифікація та розширене керування доступами.</li><li>API для інтеграції з корпоративними системами.</li></ol><h2 id="🛡️-надіиність" tabindex="-1">🛡️ Надійність <a class="header-anchor" href="#🛡️-надіиність" aria-label="Permalink to &quot;🛡️ Надійність&quot;">​</a></h2><ol><li>Використання шифрування для збереження конфіденційної інформації.</li><li>Автоматичне резервне копіювання для захисту від втрати даних.</li><li>Реплікація бази даних для забезпечення безперервної роботи.</li><li>Розмежування рівнів доступу та контроль дій користувачів.</li><li>Балансування навантаження між серверами для стабільної роботи.</li><li>Дотримання міжнародних стандартів безпеки.</li><li>Регулярні перевірки вразливостей та оновлення системи.</li></ol><h2 id="🚀-продуктивність" tabindex="-1">🚀 Продуктивність <a class="header-anchor" href="#🚀-продуктивність" aria-label="Permalink to &quot;🚀 Продуктивність&quot;">​</a></h2><ol><li>Оптимізовані SQL-запити та використання індексів у базі даних для швидкого доступу до інформації.</li><li>Підтримка асинхронної обробки запитів для підвищення швидкодії.</li><li>Оптимізація використання CPU та RAM завдяки продуманій архітектурі сервісу.</li><li>Використання сучасних технологій фронтенду (Vue.js) для миттєвого оновлення даних.</li><li>Резервне копіювання та швидке відновлення даних у разі збоїв.</li><li>Оптимізація рендерингу та мінімізація запитів до сервера.</li><li>Використання контейнеризації (Docker) для гнучкого керування інфраструктурою.</li></ol><h2 id="⚡-експлуатаціина-придатність" tabindex="-1">⚡ Експлуатаційна придатність <a class="header-anchor" href="#⚡-експлуатаціина-придатність" aria-label="Permalink to &quot;⚡ Експлуатаційна придатність&quot;">​</a></h2><ol><li><strong>Легке налаштування</strong>: автоматизовані скрипти для швидкого розгортання та оновлення системи; інтуїтивний процес розгортання.</li><li><strong>Зручність використання</strong>: адаптивний дизайн для комфортної роботи на різних пристроях; гнучкі налаштування користувацького інтерфейсу для персоналізації робочого середовища.</li><li><strong>Гнучкість та інтеграція</strong>: просте підключення до зовнішніх сервісів та API для інтеграції з іншими платформами.</li><li><strong>Надійна технічна підтримка</strong>: система допомоги: FAQ, онлайн-гід; регулярне оновлення продукту відповідно до відгуків користувачів.</li></ol>',64),d=[s];function a(g,i,l,b,h,D){return o(),r("div",null,d)}const B=t(e,[["render",a]]);export{u as __pageData,B as default};
