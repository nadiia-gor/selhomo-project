/* мінімум
Task 1 */
let number1 = 0.1;
let number2 = 0.2;
console.log((number1 + number2).toFixed(1));

// Task 2
let alsoNumber1 = "1";
let alsoNumber2 = 2;
console.log(+alsoNumber1 + alsoNumber2); 
// унарний плюс перетворив наш стрінг у число

// Task 3
function mintask3() {
const sizeInGB = parseFloat(prompt('Enter the size of flash drive in GB'));
const sizeInMB = sizeInGB * 1024;
const amountOfFiles = Math.floor(sizeInMB / 820);
alert(`You can put ${amountOfFiles} 820MB files on the flash drive`);
}

/* норма 
Task 1 */
function normaltask1() {
const amountOfMoney = parseFloat(prompt('Enter your amount of money, €'));
const chokoValue = parseFloat(prompt('Enter enter the cost of one chocolate'));
const totalChoko = Math.floor(amountOfMoney / chokoValue);
const change = (amountOfMoney - (chokoValue * totalChoko)).toFixed(2);
alert(`You can buy ${totalChoko} slices of chokolate. Your change: ${change} €`);
}

// Task 2
function normaltask2() {
const threeDigit = parseInt(prompt('Enter any three-digit number'));
const s = parseInt(threeDigit / 100);
const d = parseInt(threeDigit / 10) % 10;
const o = threeDigit % 10;
const reverse = o*100 + d*10 + s;
alert(`Reverse number is ${reverse}`);
}

/* максимум
Task 1 */
function maxtask1() {
const amountDeposit = parseFloat(prompt('Enter the amount of the deposit in the bank for 2 months'));
const sumPercent = (amountDeposit * (0.05 * 1/6)).toFixed(2); 
// 1/6 = 2/12 місяців
alert(`The amount of accrued interest is ${sumPercent} €`);
}

/* Task 2
2 && 0 && 3 = 0, && — "та", якщо у виразі є хоча б одне неправдиве значення, то весь вираз дорівнюватиме false. серед переліку маємо 0 = false.
2 || 0 || 3 = 2, || означає "або", серед такого переліку вибирається перше true значення.
2 && 0 || 3 = 3, проаналізуємо весь вираз зліва направо. 2 && 0 = 0, далі 0 || 3 = 3. */