// Задача №1, з підручника
// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.
// Оголошена функція toggleModalVisibility(isVisible)
// Виклик toggleModalVisibility(true) повертає false
// Виклик toggleModalVisibility(false) повертає true
// Використано оператор !

function toggleModalVisibility(isVisible) {
  return !isVisible;
}

console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false));


// Задача 2 від Gemini
// Гостьовий доступ
// Напиши функцію isGuest(isRegistered), яка приймає булеве значення isRegistered(чи зареєстрований користувач).Функція має повернути true, якщо користувач НЕ зареєстрований.І false, якщо зареєстрований.
// // Тести для перевірки:
// console.log(isGuest(false)); // true
// console.log(isGuest(true));  // false

function isGuest(isRegistered) {
    return !isRegistered;
}

console.log(isGuest(false));
console.log(isGuest(true));


// Задача 3 від Gemini
// Доступ до фейсконтролю
// Напиши функцію canEnterClub(isAdult, isBanned), яка приймає два булевих значення: isAdult — чи є повнолітнім.isBanned — чи знаходиться у «чорному списку».Функція має повернути true лише тоді, коли користувач повнолітній І НЕ знаходиться у чорному списку.
// // Тести для перевірки:
// console.log(canEnterClub(true, false)); // true
// console.log(canEnterClub(true, true));  // false
// console.log(canEnterClub(false, false)); // false

function canEnterClub(isAdult, isBanned) {
    return isAdult && !isBanned;
}

console.log(canEnterClub(true, false)); // true
console.log(canEnterClub(true, true));  // false
console.log(canEnterClub(false, false)); // false

// Задача 4 від Gemini
// Перевірка на порожній рядок
// Напиши функцію isEmpty(text), яка приймає рядок text.Використай оператор!, щоб перевірити, чи рядок порожній("").Якщо рядок порожній(""), функція має повернути true.Якщо там є хоч якийсь текст(наприклад, "Привіт"), функція має повернути false.Підказка: пам'ятай, що !"" перетворює порожній рядок на true.
// // Тести для перевірки:
// console.log(isEmpty(""));       // true
// console.log(isEmpty("Привіт")); // false

function isEmpty(text) {
    return !text;
}

console.log(isEmpty(""));       // true
console.log(isEmpty("Привіт")); // false