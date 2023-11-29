// завдання мінімум 1
const a = 0.1 + 0.2
console.log(a.toFixed(1));

// завдання мінімум 2
const str = "1"
const numb = Number(str);

console.log(numb + 2);

// завдання мінімум 3
const scope = window.prompt("Enter the size of your USB stick", "16");
const scopeMb = 820;
console.log((Math.floor((scope * 1000) / 820)) + ' files will fit on your USB stick');

// завдання норма 1
const sum = Number(window.prompt('Enter your total amount of money'));
const choco = Number(window.prompt('Enter the price of a chocolate'));
const pieces = Math.floor(sum / choco);
console.log('You can buy ' + pieces + ' pieces of chocolate and your change is ' + (sum - pieces * choco));

// завдання норма 2
const threeDigitNumber = Number(window.prompt('Enter any three-digit number'));

function getReversedNum(threeDigitNumber) {
  let reverseNumber = 0;
  while (threeDigitNumber) {
    reverseNumber = reverseNumber * 10 + threeDigitNumber % 10;
    threeDigitNumber = Math.floor(threeDigitNumber / 10);
  }

  return reverseNumber;
}

console.log(getReversedNum(threeDigitNumber));

// завдання максимум 1
const sum1 = Number(window.prompt('Enter your investment amount (interest rate is 5%)'));
console.log('Total amount of accrued interest is: ' + (sum1 * (1.05**2) - sum1).toFixed(2));


// завдання максимум 2

/* 2 && 0 && 3 — false, тому що && означає and, в такому випадку якщо в логічних операторах з && маємо хоча б один false, то і все значення буде false. 

2 || 0 || 3 — true, тому що || означає or, в такому випадку якщо в логічних операторах з || маємо хоча б один true, то і все значення буде true.

2 && 0 || 3 — true, тому що насамперед ми читаємо вираз зліва направо. тобто, з перших двох значень випливає false, а далі вже порівнюється з 3, яка true, при || кінцеве значення оператора буде true.
*/



