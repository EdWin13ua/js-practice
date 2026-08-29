// Задача №1, з підручника
// Функція checkFileExtension(fileName, ext) приймає два параметри:
// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:
// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"
// Оголошена функція checkFileExtension(fullname, name)
// Виклик функції checkFileExtension("styles.css", ".css") повертає "File extension matches"
// Виклик функції checkFileExtension("styles.css", ".js") повертає "File extension does not match"
// Виклик функції checkFileExtension("app.js", ".js") повертає "File extension matches"
// Виклик функції checkFileExtension("app.js", ".html") повертає "File extension does not match"
// Виклик функції checkFileExtension("index.html", ".html") повертає "File extension matches"
// Виклик функції checkFileExtension("index.html", ".css") повертає "File extension does not match"
// Виклик функції checkFileExtension("index.html", ".js") повертає "File extension does not match"

function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return "File extension matches";
  } else {
    return "File extension does not match";
  }
}

// console.log(checkFileExtension("styles.css", ".css")); // "File extension matches"
// console.log(checkFileExtension("styles.css", ".js"));  // "File extension does not match"
// console.log(checkFileExtension("app.js", ".js"));      // "File extension matches"
// console.log(checkFileExtension("app.js", ".html"));    // "File extension does not match"
// console.log(checkFileExtension("index.html", ".html"));// "File extension matches"
// console.log(checkFileExtension("index.html", ".css")); // "File extension does not match"
// console.log(checkFileExtension("index.html", ".js"));  // "File extension does not match"

// Задача 2 від Gemini
// Перевірка протоколу сайту
// Створи функцію isSecureUrl(url), яка приймає рядок url(адресу сайту).Якщо адреса починається з "https://", функція має повертати true, інакше — false.
// Приклад: isSecureUrl("[https://google.com](https://google.com)") $\rightarrow$ true, а isSecureUrl("[http://google.com](http://google.com)") $\rightarrow$ false.

function isSecureUrl(url) {
    if (url.startsWith("https://")) {
        return true
    } else {
        return false
    }
}

// скорочений код:

function isSecureUrl(url) {
  return url.startsWith("https://");
}

// console.log(isSecureUrl("https://google.com")); // true
// console.log(isSecureUrl("http://google.com"));  // false
// console.log(isSecureUrl("https://ukr.net"));    // true
// console.log(isSecureUrl("ftp://files.com"));    // false

// Задача 3 від Gemini
// Форматування імені користувача
// Створи функцію checkNick(username), яка приймає ім'я користувача. Якщо воно починається з символу "@", повертай рядок "Valid username", інакше — "Invalid username".
// Приклад: checkNick("@alex") $\rightarrow$ "Valid username", а checkNick("alex") $\rightarrow$ "Invalid username".

function checkNick(username) {
    if (username.startsWith("@")) {
        return "Valid username"
    } else {
        return "Invalid username"
    }
}

// скорочений код:

function checkNick(username) {
  return username.startsWith("@") ? "Valid username" : "Invalid username";
}

// console.log(checkNick("@alex"));    // "Valid username"
// console.log(checkNick("alex"));     // "Invalid username"
// console.log(checkNick("@john_doe"));// "Valid username"
// console.log(checkNick("admin"));    // "Invalid username"

// Задача 4 від Gemini
// Перевірка мови привітання
// Створи функцію isSpanishGreeting(phrase), яка приймає рядок phrase. Якщо фраза починається з "Hola", повертай true, інакше — false.
// Пам'ятай про чутливість до регістру!Приклад: isSpanishGreeting("Hola, amigo!") $\rightarrow$ true, а isSpanishGreeting("hola, amigo!") $\rightarrow$ false.

function isSpanishGreeting(phrase) {
    return phrase.startsWith("Hola");
}

// console.log(isSpanishGreeting("Hola, amigo!")); // true
// console.log(isSpanishGreeting("hola, amigo!")); // false (маленька буква 'h')
// console.log(isSpanishGreeting("Hello, friend")); // false
// console.log(isSpanishGreeting("Hola!"));        // true

// Задача 5 від Gemini
// Фільтр доменної зони
// Створи функцію isUkrainianDomain(domain), яка приймає ім'я сайту domain. Якщо сайт закінчується на українське доменне розширення ".ua", повертай рядок "Ukrainian site", інакше — "Other site".Приклад: isUkrainianDomain("ukr.net.ua") $\rightarrow$ "Ukrainian site", а isUkrainianDomain("site.com") $\rightarrow$ "Other site".

function isUkrainianDomain(domain) {
    return domain.endsWith(".ua") ? "Ukrainian site" : "Other site";
}

// console.log(isUkrainianDomain("ukr.net.ua"));  // "Ukrainian site"
// console.log(isUkrainianDomain("site.com"));    // "Other site"
// console.log(isUkrainianDomain("google.ua"));   // "Ukrainian site"
// console.log(isUkrainianDomain("github.io"));   // "Other site"