// Задача №1, з підручника
// Функція getFileName(file) приймає один параметр
// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення
// Оголошена функція getFileName(file)
// Виклик функції getFileName("styles.css") повертає "styles"
// Виклик функції getFileName("app.js") повертає "app"
// Виклик функції getFileName("app") повертає "app"
// Виклик функції getFileName("index.js") повертає "index"
// Виклик функції getFileName("index.html") повертає "index"
// Виклик функції getFileName("index.css") повертає "index"
// Виклик функції getFileName("index") повертає "index"

function getFileName(file) {
    const dotIndex = file.indexOf(".");

  if (dotIndex === -1) {
    return file;
  } else {
    return file.slice(0, dotIndex);
  }
}

// Скорочений код:

function getFileName(file) {
  const dotIndex = file.indexOf(".");
  return dotIndex === -1 ? file : file.slice(0, dotIndex);

console.log(getFileName("styles.css")); // "styles"
console.log(getFileName("app.js"));     // "app"
console.log(getFileName("app"));        // "app"
console.log(getFileName("index.js"));   // "index"
console.log(getFileName("index.html")); // "index"
console.log(getFileName("index.css"));  // "index"
console.log(getFileName("index"));     // "index"