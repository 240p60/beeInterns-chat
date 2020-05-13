export default function ChatApi() {
    let isStart = false;
    let numbers = [];

    return function(cmd) {
        let reply = `Я не понимаю, введите другую команду!`;
        if (!isStart && /^\/start$/.test(cmd)) {
            isStart = true;
            reply = `Привет, меня зовут Чат-бот, а как зовут тебя?`;
        } else if (/^\/name: \w+$/.test(cmd)) {
            let name = cmd.split(' ')[1];
            reply = `Привет, ${name}, приятно познакомится. Я умею считать, введи числа которые надо посчитать. Также я могу поделиться прогнозом погоды`;
        } else if (!numbers.length && /^\/number: \d+, \d+/.test(cmd)) {
            numbers = cmd.split(': ')[1].split(', ').map(item => parseInt(item));
            reply = `Введите одно из действий: -, +, *, /`;
        } else if (numbers.length && /^[/+\-*]$/.test(cmd)) {
            let result;
            if (cmd === '/')
                result = numbers[0] / numbers[1];
            else if (cmd === '*')
                result = numbers[0] * numbers[1];
            else if (cmd === '+')
                result = numbers[0] + numbers[1];
            else if (cmd === '-')
                result = numbers[0] - numbers[1];
            reply = result ? `Результат: ${result}` : `Попробуйте снова`;
            numbers = [];
        } else if (/^\/stop$/.test(cmd)) {
            numbers = [];
            isStart = false;
            reply = `Всего доброго, если хочешь поговорить пиши /start`;
        }
        return reply;
    }
}
