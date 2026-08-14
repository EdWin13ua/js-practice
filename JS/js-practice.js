//Напиши функцію checkAge(age), яка приймає вік і повертає "Adult", якщо вік 18 або більше, та "Minor" в іншому випадку.

function checkAge(age) {
    if (age >= 18) {
        return `Adult`;
    } else {
        return `Minor`
    }
}

// console.log(checkAge(20));
// console.log(checkAge(15));
// console.log(checkAge(18));

//Напиши функцію canDrive(hasLicense), яка приймає true або false. Якщо true — повертає "Yes", якщо false — "No". Обов'язково використай тернарний оператор.

function canDrive(hasLicense) {
    return hasLicense ? "Yes" : "No";
}

// console.log(canDrive(true));
// console.log(canDrive(false));
// console.log("Водій з правами:", canDrive(true));
// console.log("Водій без прав:", canDrive(false));
// console.log(`Має права true: ${canDrive(true)}`);
// console.log(`Має права false: ${canDrive(false)}`);


//Напиши функцію getShippingCost(country), яка повертає вартість доставки (число) залежно від країни: "China" ➔ 100; "Chile" ➔ 250; "Australia" ➔ 170. Будь-яка інша країна ➔ "Sorry, there is no delivery to your country". Вимога: Обов'язково використай оператор switch.

function getShippingCost(country) {
  switch (country) {
    case "China":
      return 100;
    case "Chile":
      return 250;
    case "Australia":
      return 170;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Ukraine"));