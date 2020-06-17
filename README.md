### `Chat Bot`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Команды для чат-бота`

- /start — начало общения с чат ботом. Ответ: «Привет, меня зовут Чат-бот, а как зовут тебя?». Если ввели другое значение, чат-бот должен отвечать: «Введите команду /start, для начала общения»
- /name: Alex — ответ: «Привет Alex, приятно познакомится. Я умею считать, введи числа которые надо посчитать»
- /number: 7, 9 :
После ввода чисел Чат-бот должен предложить ввести одно из действий: -, +, *, /
После ввода действия, Чат-бот возвращает результат
- /stop — Ответ Чат-бота: «Всего доброго, если хочешь поговорить пиши /start»

API погоды работает только с vpn
- /weather: Moscow - ответ: Текущая погода в Москве