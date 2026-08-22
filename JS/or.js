// Задача 1.
// З конспекту
// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.
// Оголошена функція checkAccess(subType)
// Використано оператор ||
// Виклик checkAccess("pro") повертає true
// Виклик checkAccess("starter") повертає false
// Виклик checkAccess("vip") повертає true
// Виклик checkAccess("free") повертає false

function checkAccess(subType) {
  if (subType ==="pro" || subType ==="vip") {
    return true;
  } else {
    return false
  }
}

// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("free"));

// Задача 2 від Gemini
// Передбач результат (без запуску коду). Що саме виведе в консоль кожен із цих виразів?
// console.log(false || "Кіт" || 0);// "Кіт"
// console.log(0 || null || undefined);//undefined
// console.log("Яблуко" || "Груша");//"Яблуко"

// Задача 3 від Gemini
// Напиши функція canRide(height, hasAdult), яка перевіряє, чи можна дитині кататися на гірці.
//   - Доступ дозволено(true), якщо зріст height більший або дорівнює 140 або якщо дитину супроводжує дорослий(hasAdult === true)
//   - В іншому випадку функція повертає false.
//   Приклади для перевірки:
// canRide(150, false);//true
// canRide(120, true);//true
// canRide(110, false);//false

function canRide(height, hasAdult) {
  if (height >= 140 || hasAdult === true) {
    return true;
  }
 else {
return false
}
}

// Скорочений код
function canRide(height, hasAdult) {
  return height >= 140 || hasAdult;
}

// console.log(canRide(150, false));
// console.log(canRide(120, true));
// console.log(canRide(110, false));
// console.log(canRide(140, false));

// Задача 4 від Gemini
// Напиши функцію isWeekend(day), яка приймає день тижня (рядок).
// Якщо day дорівнює "Saturday" або "Sunday", функція повертає true.
// Для всіх інших днів повертає false.
// Приклади для перевірки:
// console.log(isWeekend("Saturday"));
// console.log(isWeekend("Sunday"));
// console.log(isWeekend("Monday"));

function isWeekend(day) {
  if (day === "Saturday" || day === "Sunday") {
    return true;
  } else {
    return false;
  }
}

// Скорочений код
function isWeekend(day) {
return day === "Saturday" || day === "Sunday"
}


// console.log(isWeekend("Saturday"));
// console.log(isWeekend("Sunday"));
// console.log(isWeekend("Monday"));

// Задача 5 від Gemini
// Напиши функцію getUserName(name), яка приймає ім'я користувача (рядок).
// За допомогою оператора || зроби так, щоб якщо параметр name порожній (""), функція повертала рядок "Гість".
// Якщо ім'я передано (наприклад, "Анна"), функція має повернути це ім'я.
// Підказка: це теж робиться в один рядок з return name || ....

function getUserName(name) {
  return name || "Гість";
}

// console.log(getUserName("Анна"));
// console.log(getUserName("Іра"));
// console.log(getUserName(""));

// Задача 6 від Gemini
// Роль за замовчуванням
// Напиши функцію getRole(role), яка приймає значення ролі користувача (рядок).
// Якщо значення role передано (наприклад, "admin"), функція повертає його.
// Якщо role порожній рядок (""), функція повертає "guest".
// JavaScript
// Тести для перевірки:
// console.log(getRole("admin")); // "admin"
// console.log(getRole(""));      // "guest"

function getRole(role) {
  return role || "Guest";
}

// console.log(getRole("Admin")); // "admin"
// console.log(getRole(""));      // "Guest"


// Задача 7 від Gemini
// Напиши функцію canEdit(isAdmin, isAuthor), яка приймає два булевих значення (true або false).
// Вона має повернути true, якщо користувач є адміном або автором матеріалу.
// В іншому випадку повертає false.
// JavaScript
// Тести для перевірки:
// console.log(canEdit(true, false));  // true
// console.log(canEdit(false, true));  // true
// console.log(canEdit(false, false)); // false

function canEdit(isAdmin, isAuthor) {
  return isAdmin || isAuthor
}

// console.log(canEdit(true, false));  // true
// console.log(canEdit(false, true));  // true
// console.log(canEdit(false, false)); // false