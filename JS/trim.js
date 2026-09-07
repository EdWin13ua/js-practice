// Задача №1, з підручника
//Функція createFileName(name, ext) приймає два параметри:
//name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо;
//ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
//Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.
//Оголошена функція createFileName(name, ext)
//Виклик функції createFileName(" order ", "txt") повертає "order.txt"
//Виклик функції createFileName("report ", "csv") повертає "report.csv"
//Виклик функції createFileName(" presentation", "xml") повертає "presentation.xml"

function createFileName(name, ext) {
  return `${name.trim()}.${ext}`;
}

// console.log(createFileName(" order ", "txt")); // "order.txt"
// console.log(createFileName("report ", "csv")); // "report.csv"
// console.log(createFileName(" presentation", "xml")); // "presentation.xml"

// Задача 2 від Gemini
// Напиши функцію isEmptyInput(text), яка приймає рядок text. Вона повинна повертати true, якщо після видалення всіх пробілів по боках рядок виявився порожнім "", або false, якщо там є хоч якісь символи.
// Приклад: isEmptyInput("   ") -> true
// Приклад: isEmptyInput("  hello ") -> false

function isEmptyInput(text) {
  return text.trim() === "";
}

// console.log(isEmptyInput("   ")); // true
// console.log(isEmptyInput("  hello ")); // false
// console.log(isEmptyInput("")); // true

// Задача 3 від Gemini
//Напиши функцію formatHashtag(tag), яка приймає рядок tag (наприклад, "  javascript  "). Функція має прибрати пробіли з країв та додати на початок знак #.
//Приклад: formatHashtag("  js  ") -> "#js"

function formatHashtag(tag) {
  return `#${tag.trim()}`;
}

// console.log(formatHashtag("  js  ")); // "#js"
// console.log(formatHashtag("   react")); // "#react"

// Задача 4 від Gemini. Збір повного імені
// Напиши функцію getFullName(firstName, lastName), яка приймає ім'я та прізвище. Обидва параметри можуть містити випадкові пробіли по боках. Функція повинна повернути очищене повне ім'я, розділене один лише пробілом між ними.
// Приклад: getFullName("  Ivan ", "  Franko  ") -> "Ivan Franko"

function getFullName(firstName, lastName) {
  return `${firstName.trim()} ${lastName.trim()}`;
}

// console.log(getFullName("  Ivan ", "  Franko  ")); // "Ivan Franko"
// console.log(getFullName(" Taras", "Shevchenko   ")); // "Taras Shevchenko"
