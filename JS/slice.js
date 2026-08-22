// Задача №1, з підручника
// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.
// Оголошена функція getSubstring(string, length)
// Виклик функції getSubstring("Hello world", 3) повертає "Hel"
// Виклик функції getSubstring("Hello world", 5) повертає "Hello"
// Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
// Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
// Виклик функції getSubstring("Hello world", 0) повертає ""

function getSubstring(string, length) {
  return string.slice(0, length);
}
// console.log(getSubstring("Hello world", 3)); // "Hel"
// console.log(getSubstring("Hello world", 5)); // "Hello"
// console.log(getSubstring("Hello world", 8)); // "Hello wo"
// console.log(getSubstring("Hello world", 11)); // "Hello world"
// console.log(getSubstring("Hello world", 0)); // ""