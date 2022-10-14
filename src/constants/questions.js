export const questions = [
    {
        image: null,
        question_text: 'Алиса задумала число, прибавила 9, разделила на 3, отняла 2, и умножила на 4 чтобы получить результат 8<br>' +
            'Какое было задуманное число?',
        name: '0',
    },
    {
        image: null,
        question_text: 'Боб задумал четное число и нечетное число, перемножил эти два числа вместе, добавил 6, поделил на 5, и отнял 3 чтобы получить результат 1<br>' +
            'Какое было нечетное задуманное число (число не может равняться 1)?',
        name: '1',
    },
    {
        image: null,
        question_text: 'На острове Фу местные жители используют систему исчисления основанную на цветных камушках<br>' +
            'В этой системе:<br>' +
            '1 красный камушек равен 3 желтым камушкам<br>' +
            '1 голубой камушек равен одному красному камушку и 2 желтым камушкам<br>' +
            '1 зеленый камушек равен 3 красным камушкам<br>' +
            'Каков результат деления зелёного и голубого камушков на 2 красных и жёлтый камушек?',
        name: '2',
    },
    {
        image: null,
        question_text: 'На острове Фу местные жители используют систему исчисления основанную на цветных камушках<br>' +
            'В этой системе:<br>' +
            '1 красный камушек равен 3 желтым камушкам<br>' +
            '1 голубой камушек равен одному красному камушку и 2 желтым камушкам<br>' +
            '1 зеленый камушек равен 3 красным камушкам<br>' +
            'Используя минимальное возможное количество камушков и не используя голубые камушки какова ценность 2 голубых камушков',
        name: '3',
    },
    {
        image: null,
        question_text: 'Все сотрудники компании AcmeSoft или программисты или продажники<br>' +
            'Программисты всегда говорят правду, продажники всегда врут<br>' +
            'Три сотрудника AcmeSoft – A, B, C стояли вместе в холле<br>' +
            'Мимо проходил посетитель, он спросил у А «Вы программист или продажник?»<br>' +
            'А проворчал ответ так, что никто ничего не услышал<br>' +
            'Посетитель спросил у B «Что сказал А?»<br>' +
            'B ответил «А сказал, что он продажник»<br>' +
            'Тут третий сотрудник, C, сказал «Не верьте B, он врет!»<br>' +
            'Кто B и C?',
        name: '4',
    },
    {
        image: null,
        question_text: 'Все сотрудники компании AcmeSoft или программисты или продажники<br>' +
            'Программисты всегда говорят правду, продажники всегда врут<br>' +
            'Два сотрудника AcmeSoft, А и В сидят с посетителем в конференц-зале<br>' +
            'А делает следующее заявление «Как минимум один из нас точно продажник»<br>' +
            'Кто А и В?',
        name: '5',
    },
    {
        image: null,
        question_text: 'Заявки для системы биржевого рынка закодированы в следующем порядке слева направо:<br>' +
            '1 Первый символ «B» для заявки на «Покупку» (Buy), «S» для заявки на «Продажу» (Sell)<br>' +
            '2 Количество акций для покупки или продажи<br>' +
            '3 Символ биржевого тикера со всеми заглавными буквами для заявки на «Покупку» и всеми маленькими буквами для заявки на «Продажу»<br>' +
            '4 Если заявка является «лимитированной» заявкой с фиксированной ценой «Покупки/продажи», то запрашиваемая стоимость пишется в центах, иначе цена не включена и заявка будет рыночной, то есть с текущей ценой спроса биржевого рынка<br>' +
            '5 Если заявка является «лимитированной» заявкой с ограниченным временем, символ «Т» ставится перед количеством минут до конца срока истечения заявки и более не должна быть исполнена<br>' +
            'Примечание:<br>' +
            'Код запроса может содержать лишь Числа и Буквы; Он не включает в себя запятые, точки и прочее.<br>' +
            'Каков будет код для лимитированного запроса на покупку 10000 акций компании Alcoa (тикер: AA) при цене 9,00$, но только если запрос будет выполнен в следующие два часа.',
        name: '6',
    },
    {
        image: null,
        question_text: 'Заявки для системы биржевого рынка закодированы в следующем порядке слева направо:<br>' +
            '1 Первый символ «B» для заявки на «Покупку» (Buy), «S» для заявки на «Продажу» (Sell)<br>' +
            '2 Количество акций для покупки или продажи<br>' +
            '3 Символ биржевого тикера со всеми заглавными буквами для заявки на «Покупку» и всеми маленькими буквами для заявки на «Продажу»<br>' +
            '4 Если заявка является «лимитированной» заявкой с фиксированной ценой «Покупки/продажи», то запрашиваемая стоимость пишется в центах, иначе цена не включена и заявка будет рыночной, то есть с текущей ценой спроса биржевого рынка<br>' +
            '5 Если заявка является «лимитированной» заявкой с ограниченным временем, символ «Т» ставится перед количеством минут до конца срока истечения заявки и более не должна быть исполнена<br>' +
            'Примечание:<br>' +
            'Код запроса может содержать лишь Числа и Буквы; Он не включает в себя запятые, точки и прочее.<br>' +
            'Каков будет код для продажи 2000 акций Walmart (тикер: WMT) по текущей рыночной цене',
        name: '7',
    },
    {
        image: null,
        question_text: 'Представьте язык, который использует следующий набор символов:<br>' +
            'Префиксы {a e i}<br>' +
            'Маленькие символы {b c d}<br>' +
            'Большие символы {B C D}<br>' +
            'Знаки пунктуации {x y}<br>' +
            'Этот язык должен придерживаться следующих правил:<br>' +
            '1)  Каждая серия должна иметь один и только один символ Префикса<br>' +
            '2)  Серия должна начинаться на символ Префикса<br>' +
            '3)  Серия должна заканчиваться на Знак пунктуации<br>' +
            '4)  Серия может иметь до 5, но не более, символов, включая Префикс и Знак пунктуации<br>' +
            'Отвечает ли правилам написанным выше серия: axBx',
        name: '8',
    },
    {
        image: null,
        question_text: 'Представьте язык, который использует следующий набор символов:<br>' +
            'Префиксы {a e i}<br>' +
            'Маленькие символы {b c d}<br>' +
            'Большие символы {B C D}<br>' +
            'Знаки пунктуации {x y}<br>' +
            'Этот язык должен придерживаться следующих правил:<br>' +
            '1)  Каждая серия должна иметь один и только один символ Префикса<br>' +
            '2)  Серия должна начинаться на символ Префикса<br>' +
            '3)  Серия должна заканчиваться на Знак пунктуации<br>' +
            '4)  Серия может иметь до 5, но не более, символов, включая Префикс и Знак пунктуации<br>' +
            'Отвечает ли правилам написанным выше серия: aeDcy',
        name: '9',
    },
    {
        image: null,
        question_text: 'Есть следующая последовательность:<br>' +
            '1,2,3,5,8<br>' +
            'Какое следующее число?',
        name: '10',
    },
    {
        image: null,
        question_text: 'Есть следующая последовательность:<br>' +
            '1,3,7,15,31<br>' +
            'Какое следующее число?',
        name: '11',
    },
    {
        image: 'images/13_14.png',
        question_text: 'В солнечный теплый день Джон решил провести 2 часа с тремя друзьями<br>' +
            'Что Джон делает, и что он носит?',
        name: '12',
    },
    {
        image: 'images/13_14.png',
        question_text: 'Три дня спустя Джон идет на свидание с Джэйн<br>' +
            'Не тепло, но солнечно<br>' +
            'Джон и Джейн решают провести весь день вместе<br>' +
            'Что Джон делает, и что он носит?',
        name: '13',
    }
]