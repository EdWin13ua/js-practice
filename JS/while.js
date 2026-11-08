// Задача №1, з підручника
//Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
//Тести:
//Виклик функції calculateTotal(1) повертає 1
//Виклик функції calculateTotal(3) повертає 6
//Виклик функції calculateTotal(0) повертає 0
//Виклик функції calculateTotal(18) повертає 171
//Виклик функції calculateTotal(24) повертає 300
//Виклик функції calculateTotal() з випадковим числом повертає правильне значення
//Оголошена функція calculateTotal(number)

function calculateTotal(number) {
  let total = 0;
  let i = 1;
  while (i <= number) {
    total += i;
    i += 1;
  }
  return total;
}
