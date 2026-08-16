// Задача 1.
// З конспекту
// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок.Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.
// Оголошена функція isNumberInRange(start, end, number)
// Використано оператор &&
// Виклик isNumberInRange(10, 30, 17) повертає true
// Виклик isNumberInRange(10, 30, 5) повертає false
// Виклик isNumberInRange(20, 50, 24) повертає true
// Виклик isNumberInRange(20, 50, 76) повертає false

// Більш довгий код з if / else
function isNumberInRange(start, end, number) {
  if (number >= start && number <= end) {
    return true;
  } else {
    return false;
  }
}

// Короткий та елегантний варіант з return (рекомендований)

function isNumberInRange(start, end, number) {
  return number >= start && number <= end;
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));

// Задача 2
// Від Gemini
// Напиши функцію canWatchMovie(age, hasSubscription), яка приймає два параметри:
// age — вік користувача (число).
// hasSubscription — наявність підписки (булеве значення: true або false).
// Функція має повертати true, тільки якщо користувачу є 18 років або більше(age >= 18) ТА у нього є підписка(hasSubscription).В іншому випадку — повертає false.
// Для перевірки:
// console.log(canWatchMovie(20, true));  // true
// console.log(canWatchMovie(16, true));  // false
// console.log(canWatchMovie(22, false)); // false

function canWatchMovie(age, hasSubscription) {
  return age >= 18 && hasSubscription === true;
}

// Пояснення: Оскільки hasSubscription вже само по собі є булевим значенням(true або false), порівняння === true можна навіть не писати.Код можна скоротити ось так:
// function canWatchMovie(age, hasSubscription) {
//   return age >= 18 && hasSubscription;
// }

console.log(canWatchMovie(20, true)); // true
console.log(canWatchMovie(16, true)); // false
console.log(canWatchMovie(22, false)); // false

// Задача 3
// Від Gemini
// Задача 2: Коротке передбачення (усно)
// Що виведе в консоль кожен із цих виразів ? Спробуй вгадати в голові, а потім перевір у коді:

console.log("Cat" && "Dog"); //"Dog"
console.log(0 && "JavaScript"); //0

// Задача 4
// Від Gemini
// Доступ до навчального курсу
// Напиши функцію canAccessCourse(isLoggedIn, hasPaid), яка приймає два параметри:
// isLoggedIn — чи увійшов користувач у свій акаунт (true або false).
// hasPaid — чи оплатив користувач курс (true або false).
// Функція має повертати true тільки тоді, коли користувач увійшов в акаунт І оплатив курс. В усіх інших випадках має повертати false.
// Спробуй зробити в один рядок з return без використання if/else.
// Для перевірки:
// console.log(canAccessCourse(true, true));   // true
// console.log(canAccessCourse(true, false));  // false
// console.log(canAccessCourse(false, true));  // false

function canAccessCourse(isLoggedIn, hasPaid) {
  return isLoggedIn && hasPaid;
}

console.log(canAccessCourse(true, true)); // true
console.log(canAccessCourse(true, false)); // false
console.log(canAccessCourse(false, true)); // false


// Задача 8 від Gemini
// Робочий день (оператор І — &&)
// Напиши функцію isWorkingDay(isWeekday, isNotHoliday), яка приймає два булевих значення.
// Вона має повернути true тільки тоді, коли це будній день ТА це не свято (тобто обидва параметри мають значення true).
// Використовуй оператор &&.
// JavaScript
// // Тести для перевірки:
// console.log(isWorkingDay(true, true));   // true
// console.log(isWorkingDay(true, false));  // false
// console.log(isWorkingDay(false, true));  // false

function isWorkingDay(isWeekday, isNotHoliday) {
  return isWeekday && isNotHoliday
}

console.log(isWorkingDay(true, true));   // true
console.log(isWorkingDay(true, false));  // false
console.log(isWorkingDay(false, true));  // false