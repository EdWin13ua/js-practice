// Задача №1, з підручника
// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// Тести:
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(0) повертає 0
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення
// Оголошена функція calculateTotal(number)

function calculateTotal(number) {
  let total = 0;
  let i = 1;
  while (i <= number) {
    total += i;
    i += 1;
  }
  return total;
}
// console.log(calculateTotal(1)); // 1
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(0)); // 0
// console.log(calculateTotal(18)); // 171
// console.log(calculateTotal(24)); // 300

// Задача №2 від Gemini
// Обчислення добутку чисел(Легкий рівень)Напиши функцію calculateProduct(max), яка приймає ціле додатне число max.Вона повинна повертати добуток(результат множення) усіх цілих чисел від 1 до max включно.
// Умови та приклади:
// calculateProduct(1) повертає 1 (бо 1)
// calculateProduct(3) повертає 6 (бо 1 * 2 * 3 = 6$)
// calculateProduct(5) повертає 120 (бо 1 * 2 * 3 * 4 * 5 = 120)

function calculateProduct(max) {
  let total = 1;
  let i = 1;
  while (i <= max) {
    total *= i;
    i += 1;
  }
  return total;
}

// console.log(calculateProduct(1)); // 1
// console.log(calculateProduct(3)); // 6
// console.log(calculateProduct(5)); // 120

// Задача №2 від Gemini
// Порахувати кількість парних чисел (Середній рівень)
// Напиши функцію countEvenNumbers(max), яка приймає ціле число max. Вона повинна повертати кількість парних чисел у діапазоні від 1 до max включно.
// Підказка: Перевірити, чи є число парним, можна за допомогою оператора остачі від ділення % (наприклад, number % 2 === 0).
// Умови та приклади:
// countEvenNumbers(1) повертає 0 (в діапазоні [1] немає парних)
// countEvenNumbers(6) повертає 3 (пари: 2, 4, 6);
// countEvenNumbers(11) повертає 5 (пари: 2, 4, 6, 8, 10);

function countEvenNumbers(max) {
  let count = 0;
  let i = 1;
  while (i <= max) {
    if (i % 2 === 0) {
      count += 1;
    }
    i += 1;
  }
  return count;
}

// console.log(countEvenNumbers(1)); // 0
// console.log(countEvenNumbers(6)); // 3
// console.log(countEvenNumbers(11)); // 5

// Задача №3 від Gemini
// Зняття готівки в банкоматі(Складності з умовою)Напиши функцію withdrawMoney(amount, balance), яка приймає:
// 1) amount — сума, яку користувач хоче знімати за один раз(наприклад, по 100 грн)
// 2) balance — початковий баланс на картці.
// Функція повинна знімати amount від balance у циклі while доти, доки на картці залишається достатньо коштів(balance >= amount). Функція має повертати залишок коштів на картці.
// Умови та приклади:
// withdrawMoney(100, 350) повертає 50 (зніме по 100 грн тричі: 350 - 100 - 100 - 100 = 50, на четвертий раз не вистачить)
// withdrawMoney(500, 200) повертає 200 (цикл не виконається жодного разу, бо 200 < 500)
// withdrawMoney(200, 600) повертає 0

function withdrawMoney(amount, balance) {
  while (balance >= amount) {
    balance -= amount;
  }
  return balance;
}

// console.log(withdrawMoney(100, 350)); // 50
// console.log(withdrawMoney(500, 200)); // 200
// console.log(withdrawMoney(200, 600)); // 0
