// Задача №1, з підручника
// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.
// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.
// Оголошена функція checkForName(fullname, firstName)
// Виклик функції checkForName("Jason Neis", "Jason") повертає true
// Виклик функції checkForName("Jason Neis", "jAsOn") повертає true
// Виклик функції checkForName("Jason Neis", "Jacob") повертає false
// Виклик функції checkForName("Caty Stars", "Caty") повертає true
// Виклик функції checkForName("Caty Stars", "cAtY") повертає true
// Виклик функції checkForName("Caty Stars", "Andromeda") повертає false

function checkForName(fullName, firstName) {
    const normalizedFullName = fullName.toLowerCase();
    const normalizedFirstName = firstName.toLowerCase();
    return normalizedFullName.includes(normalizedFirstName);
}

// Короткий варіант:
function checkForName(fullName, firstName) {
  return fullName.toLowerCase().includes(firstName.toLowerCase());
}
// console.log(checkForName("Jason Neis", "Jason"));     // true
// console.log(checkForName("Jason Neis", "jAsOn"));     // true
// console.log(checkForName("Jason Neis", "Jacob"));     // false
// console.log(checkForName("Caty Stars", "Caty"));      // true
// console.log(checkForName("Caty Stars", "cAtY"));      // true
// console.log(checkForName("Caty Stars", "Andromeda")); // false

// Задача 2 від Gemini
// Перевірка безпечного посилання (URL)
// Функція isSecureUrl(url) приймає рядок url (вебадресу сайту).
// Вона повинна перевіряти, чи починається адреса з безпечного протоколу https:// (у будь-якому регістрі).
// Якщо містить "https://" — повертає true.
// Якщо ні — повертає false.
// Підказка: Не забудь привести url до нижнього регістру за допомогою .toLowerCase(), перш ніж викликати .includes().

function isSecureUrl(url) {
    return url.toLowerCase().includes("https://");
}
// console.log(isSecureUrl("HTTPS://google.com")); // true
// console.log(isSecureUrl("http://my-site.org"));  // false
// console.log(isSecureUrl("https://goit.global")); // true

// Задача 3 від Gemini
// Пошук ключового слова в коментарі
// Функція checkComment(comment, keyword) приймає два параметри:
// comment — текст коментаря користувача.
// keyword — ключове слово для пошуку.
// Функція має повертати true, якщо в коментарі присутнє ключове слово (без урахування регістру), і false — якщо його немає.

function checkComment(comment, keyword) {
    return comment.toLowerCase().includes(keyword.toLowerCase());
}
// console.log(checkComment("Great JS course!", "js"));     // true
// console.log(checkComment("Hello WORLD!", "world"));     // true
// console.log(checkComment("React is awesome", "Vue"));   // false

// Задача 4 від Gemini
// Фільтрація файлів за розширенням
// Функція isImageFile(filename) приймає рядок filename (назву файлу з розширенням, наприклад "photo.jpg" або "AVATAR.PNG").
// Вона повинна перевіряти, чи є цей файл картинкою. Картинкою вважається файл, що має розширення .png, .jpg або .jpeg.
// Якщо назва файлу містить хоча б одне з цих розширень (без урахування регістру) — функція повертає true.
// Якщо ні — повертає false.
// Підказка: Спочатку зведи filename до нижнього регістру. Для перевірки кількох умов використай оператор «АБО» (||).

function isImageFile(filename) {
    const normalized = filename.toLowerCase();
    return normalized.includes(".png") || normalized.includes(".jpg") || normalized.includes(".jpeg");
}
// console.log(isImageFile("avatar.PNG"));     // true
// console.log(isImageFile("document.pdf"));   // false
// console.log(isImageFile("HOLIDAY_2026.JPG")); // true
// console.log(isImageFile("script.js"));      // false
// console.log(isImageFile("banner.jpeg"));    // true

// Задача 5 від Gemini
// Перевірка соціальних мереж у тексті
// Функція hasSocialLink(text) приймає рядок text.
// Вона повинна перевіряти, чи є в цьому тексті посилання на будь-яку з трьох соціальних мереж: "facebook", "instagram" або "youtube" (без урахування регістру).
// Якщо в тексті є хоча б одна з цих назв — функція повертає true.
// Якщо жодної немає — повертає false.

function hasSocialLink(text) {
    const socialLink = text.toLowerCase();
    return socialLink.includes("facebook") || socialLink.includes("instagram") || socialLink.includes("youtube");
}
// console.log(hasSocialLink("Follow my INSTAGRAM page")); // true
// console.log(hasSocialLink("Watch full video on YouTube")); // true
// console.log(hasSocialLink("Check out my website blog")); // false
// console.log(hasSocialLink("Find us on FaceBook and Instagram")); // true