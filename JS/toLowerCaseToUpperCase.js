// Задача №1, з підручника
// Функція normalizeInput(input, to) оголошує два параметри:
// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:
// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка input у нижньому регістрі
// Оголошена функція normalizeInput(input, to)
// Виклик функції normalizeInput("This ISN'T SpaM", "lower") повертає "this isn't spam"
// Виклик функції normalizeInput("This ISN'T SpaM", "upper") повертає "THIS ISN'T SPAM"
// Виклик функції normalizeInput("Big SALE", "lower") повертає "big sale"
// Виклик функції normalizeInput("Big SALE", "upper") повертає "BIG SALE"
// Виклик функції normalizeInput("Stay Awhile and Listen", "lower") повертає "stay awhile and listen"
// Виклик функції normalizeInput("Stay Awhile and Listen", "upper") повертає "STAY AWHILE AND LISTEN"

function normalizeInput(input, to) {
  if (to === "upper") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

// Короткий варіант:
function normalizeInput(input, to) {
  return to === "upper" ? input.toUpperCase() : input.toLowerCase();
}
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// // "this isn't spam"
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// // "THIS ISN'T SPAM"
// console.log(normalizeInput("Big SALE", "lower"));
// // "big sale"
// console.log(normalizeInput("Big SALE", "upper"));
// // "BIG SALE"
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// // "stay awhile and listen"
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));
// // "STAY AWHILE AND LISTEN"

// Задача 2 від Gemini
// Перевірка спаму (без урахування регістру)
// Функція checkForSpam(message) приймає рядок message. Вона повинна перевіряти, чи містить рядок слово "spam" у будь-якому регістрі (наприклад, "Spam", "SPAM", "sPaM").
// Якщо містить — повертає true.
// Якщо ні — повертає false.
// Підказка: Зведи весь рядок message до одного регістру за допомогою toLowerCase(), а потім використай метод includes("spam").

function checkForSpam(message) {
    return message.toLowerCase().includes("spam");
}

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("Get best offer now! SPAM!")); // true
// console.log(checkForSpam("Amazing sPaM deals")); // true


// Задача 2 від Gemini
// Форматування імені (Capitalize)
// Функція formatName(name) приймає ім'я у довільному регістрі (наприклад, "оЛЕКсАНДР" або "маРІЯ") і повертає його відформатованим: перша літера має бути великою (upper), а всі інші — малими (lower).
// Підказка: Використовуй .slice() для розділення першої літери та решти рядка: name[0].toUpperCase() + name.slice(1).toLowerCase().

function formatName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// console.log(formatName("оЛЕКсАНДР")); // "Олександр"
// console.log(formatName("маРІЯ"));     // "Марія"
// console.log(formatName("iVAN"));      // "Ivan"

// Задача 3 від Gemini
// Функція isMatchingAcronym(word, acronym) приймає два рядки: слово або фразу word та абревіатуру acronym. Функція повинна перевіряти, чи співпадає перша літера слова word (у верхньому регістрі) з першою літерою абревіатури acronym (у верхньому регістрі).
// Якщо співпадають — повертає true.
// Якщо ні — повертає false.

function isMatchingAcronym(word, acronym) {
  return word[0].toUpperCase() === acronym[0].toUpperCase();
}
// console.log(isMatchingAcronym("JavaScript", "js")); // true
// console.log(isMatchingAcronym("html", "CSS"));      // false
// console.log(isMatchingAcronym("python", "Py"));     // true

// Задача 4 від Gemini
// Функція cleanPromoCode(code) приймає рядок code, який може містити зайві пробіли на початку чи в кінці, а також літери в різному регістрі.
// Функція повинна:
// Видалити всі зайві пробіли з країв за допомогою .trim().
// Перетворити весь промокод у верхній регістр.
// Повернути оброблений рядок.

function cleanPromoCode(code) {
    return code.trim().toUpperCase()
}

// console.log(cleanPromoCode("   summer2026   ")); // "SUMMER2026"
// console.log(cleanPromoCode("discount_10  "));    // "DISCOUNT_10"
// console.log(cleanPromoCode("  freeShip "));       // "FREESHIP"