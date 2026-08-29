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
}
// console.log(getFileName("styles.css")); // "styles"
// console.log(getFileName("app.js"));     // "app"
// console.log(getFileName("app"));        // "app"
// console.log(getFileName("index.js"));   // "index"
// console.log(getFileName("index.html")); // "index"
// console.log(getFileName("index.css"));  // "index"
// console.log(getFileName("index"));     // "index"

// Задача 2 від Gemini
// Створи функцію getUsername(email), яка приймає рядок email(наприклад, "alex@gmail.com"). Функція має вирізати та повертати лише ім'я користувача до символу "@".
// Приклад: getUsername("alex@gmail.com") $\rightarrow$ "alex".
  
function getUsername(email) {
  const gotUserName = email.indexOf("@");
  return gotUserName === -1 ? email : email.slice(0, gotUserName);
}

// console.log(getUsername("alex@gmail.com"));    // "alex"
// console.log(getUsername("ivan.dev@ukr.net"));  // "ivan.dev"
// console.log(getUsername("support@github.com"));// "support"

// Задача 3 від Gemini
// Отримання домену сайту
// Створи функцію getDomain(url), яка приймає рядок url (наприклад, "[https://google.com](https://google.com)").За допомогою indexOf() знайди позицію "://" і за допомогою slice() виріж та поверни все, що йде після "://".
// Приклад: getDomain("[https://google.com](https://google.com)") $\rightarrow$ "google.com".

function getDomain(url) {
  const domain = url.indexOf("://");
  return domain === -1 ? url : url.slice(domain + 3);
}

// console.log(getDomain("https://google.com"));       // "google.com"
// console.log(getDomain("http://github.com"));        // "github.com"
// console.log(getDomain("https://sub.domain.ua"));    // "sub.domain.ua"

// Задача 4 від Gemini
// Обрив довгого тексту
// Створи функцію cutTextBeforeWord(text, word), яка шукає слово word у тексті text. Якщо слово знайдено, функція повертає текст від початку і до цього слова (не включаючи його). Якщо слова немає — повертає початковий текст.
// Приклад: cutTextBeforeWord("Hello world again", "world") $\rightarrow$ "Hello "

function cutTextBeforeWord(text, word) {
  const before = text.indexOf(word);
  return before === -1 ? text : text.slice(0, before);
}

// console.log(cutTextBeforeWord("Hello world again", "world")); // "Hello "
// console.log(cutTextBeforeWord("JavaScript is amazing", "is"));   // "JavaScript "
// console.log(cutTextBeforeWord("Frontend developer", "python"));  // "Frontend developer"

// Задача 5 від Gemini
// Отримання першого слова
// Створи функцію getFirstWord(sentence), яка приймає речення sentence. Вона має шукати перший пробіл " ".Якщо пробіл є — повертати тільки перше слово. Якщо пробілу немає (одне слово) — повертати це слово без змін.
// Приклад: getFirstWord("JavaScript is cool") $\rightarrow$ "JavaScript", а getFirstWord("Hello") $\rightarrow$ "Hello".

function getFirstWord(sentence) {
  const firstWord = sentence.indexOf(" ");
  return firstWord === -1 ? sentence : sentence.slice(0, firstWord);
}

// console.log(getFirstWord("JavaScript is cool")); // "JavaScript"
// console.log(getFirstWord("Hello"));              // "Hello"
// console.log(getFirstWord("HTML CSS JS"));        // "HTML"