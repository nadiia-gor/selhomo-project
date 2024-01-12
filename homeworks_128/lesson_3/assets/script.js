/* мінімум
Task 1 */

function mintask1() {
    let age = parseFloat(prompt('Enter your age'));
    if(age>=0 && age<12) {
        alert('Hello, kid!')
    }
    else if(age>=12 && age<18) {
        alert('Hey, teenager!')
    }
    else if(age>=18 && age<60) {
        alert('Hello, adult!')
    }
    else if(age>=60 && age<120) {
        alert('Hello, senior!')
    }
    else {
        alert('Incorrect age. Please enter a valid number')
    }
}

// Task 2

function mintask2() {
    let number = parseInt(prompt('Enter any number from 0 to 9'));
    let phrase = "The corresponding symbol is: ";
    switch(number) {
        case 0:
            phrase += ')';
            break;
        case 1:
            phrase += '!';
            break;
        case 2:
            phrase += '@';
            break;
        case 3:
            phrase += '#';
            break;
        case 4:
            phrase += '$';
            break;
        case 5:
            phrase += '%';
            break;
        case 6:
            phrase += '^';
            break;
        case 7:
            phrase += '&';
            break;
        case 8:
            phrase += '*';
            break;
        case 9:
            phrase += '(';
            break;
        default:
            alert('Incorrect number.');
            return;
    }
    alert(phrase);
}

// Task 3
function mintask3() {
    const n1 = parseInt(prompt('Enter the first number'));
    const n2 = parseInt(prompt('Enter the second number'));
    if(isNaN(n1) || isNaN(n2)) {
        alert('Incorrect number');
        return;
    }
    let sum = 0;
    let from = n1, to = n2;

    if(n1 > n2) {
        from = n2;
        to = n1;
    }
    for(let i = from;i<=to;i++) {
        sum += i;
    }
    alert(`A sum of all the numbers in this range is: ${sum}`);
}

// Task 4
function mintask4() {
const num1 = Math.abs(parseInt(prompt('Enter the first number, except zero')));
const num2 = Math.abs(parseInt(prompt('Enter the second number, except zero')));
const min = num1 < num2 ? num1 : num2;
let rez = 0;
for(let i=0; i<=min;i++) {
    if(num1 && num2) {
        if(num1 % i === 0 && num2 % i === 0) {
            rez = i
        }
    }
    else {
        alert('Invalid input');
        return;
    } 
}
alert(`The greatest common denominator is: ${rez}`);
}

// Task 5
function mintask5() {
const n = parseInt(prompt('Enter any number'));
const inputIsNegative = n < 0;
let rezString = "All divisors of this number is: ";
if (isNaN(n) || n === 0) {
    alert('Incorrect number');
    return;
  }

for(let i = inputIsNegative ? n : 1; i <= (inputIsNegative ? n * -1 : n); i++) {
    if (n % i === 0) {
        rezString += `${i} `;
    }
}
alert(rezString);
}

/* Норма
Task 1 */
function normaltask1() {
const fiveDigit = prompt('Enter five-digit number');
if(isNaN(fiveDigit) || fiveDigit.toString().length !== 5) {
    alert('Incorrect number');
    return;
}

const tenThousand = Math.floor(parseInt(fiveDigit / 10000));
const thousand = Math.floor(parseInt((fiveDigit % 10000) / 1000));
const d = Math.floor(parseInt((fiveDigit % 100) / 10));
const o = fiveDigit % 10;

if(tenThousand === o && thousand === d) {
    alert(`${fiveDigit} is a palindrome`);
}
else {
    alert(`${fiveDigit} is not a palindrome`);
}
}

// Task 2 
function normaltask2() {
    const purchase = parseFloat(prompt('Enter the sum of a purchase'));
    if(isNaN(purchase) || purchase <= 0) {
        alert('Incorrect sum of a purchase');
        return;
    }
    let discount;
    if(purchase >= 200 && purchase < 300) {
        discount = purchase - (purchase * 0.03);
        alert(`Total price: ${discount} with 3% discount`)
    }
    else if(purchase >= 300 && purchase < 500) {
        discount = purchase - (purchase*0.05);
        alert(`Total price: ${discount} with 5% discount`)
    }
    else if(purchase >= 500) {
        discount = purchase - (purchase*0.07);
        alert(`Total price: ${discount} with 7% discount`)
    }
    else {
        alert(`Price: ${purchase}. You have no discount :(`)
    }
}

// Task 3
function normaltask3() {
let positiveNumbers = 0;
let negativeNumbers = 0;
let zeros = 0;
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 0; i < 10; i++) {
    let userInput = parseFloat(prompt(`Enter number ${i + 1}:`));

    if (!isNaN(userInput)) {
        if (userInput > 0) {
            positiveNumbers++;
        } else if (userInput < 0) {
            negativeNumbers++;
        } else {
            zeros++;
        }

        if (userInput % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
    else {
        alert('Invalid input');
        i--
    }
}

alert(`Positive numbers: ${positiveNumbers}, negative numbers: ${negativeNumbers}, zeros: ${zeros}, even numbers: ${evenNumbers}, odd numbers: ${oddNumbers}`);

}

// Task 4
function normaltask4() {
let day;
let control;
let dayIndex = 0;

do {

    switch (dayIndex) {
        case 0:
            day = 'Monday';
            break;
        case 1:
            day = 'Tuesday';
            break;
        case 2:
            day = 'Wednesday';
            break;
        case 3:
            day = 'Thursday';
            break;
        case 4:
            day = 'Friday';
            break;
        case 5:
            day = 'Saturday';
            break;
        case 6:
            day = 'Sunday';
            break;
    }

control = confirm(`Today is ${day}. Do you want to see the next day?`);
dayIndex = (dayIndex + 1) % 7;

} while(control);

alert('Bye!')
}

/* максимум
Task 1 */
function maxtask1() {
    let min = 0;
    let max = 100;
    let guess;

     alert("Guess a number from 0 to 100");

    while (true) {
        guess = Math.floor((max + min) / 2);
        let answer = prompt(`Your number is > ${guess}, < ${guess} or == ${guess}? Enter "=", "<" or ">": `);

        if (answer === "=") {
            alert(`Your number is ${guess}! Game over.`);
            break;
        } else if (answer === ">") {
            min = guess + 1;
        } else if (answer === "<") {
            max = guess - 1;
        } else {
            alert("Please enter >, < or =.");
        }
    }
}

// Task 2

let multy = '';
for(let i = 2; i < 10; i++) {
    multy += '<ul>';
    for(let j = 1; j<=9; j++) {
        multy += `<li>${i} * ${j} = ${i*j}</li>`
    }
    multy += '</ul>'
}
document.getElementById('multy-table').innerHTML = multy;

// Task 3
function leapYear(y) {
    return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
}

const addZero = n => n<10?'0'+n:''+n;

function nextDay(dayIn, monthIn, yearIn) {
let dayOut = dayIn + 1, monthOut = monthIn, yearOut = yearIn;


switch(monthIn) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if(dayIn === 31) {
            dayOut = 1;
            monthOut = monthIn + 1;
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        if(dayIn === 30) {
            dayOut = 1;
            monthOut = monthIn + 1;
        }
        break;
    case 2:
        if(leapYear(yearIn)) {
            if(dayIn === 29) {
                dayOut = 1;
                monthOut = monthIn + 1;
            }
        } else {
            if(dayIn === 28) {
                dayOut = 1;
                monthOut = monthIn + 1;
            }
        }
        break;
}

if(monthOut === 13) {
    monthOut = 1;
    yearOut = yearIn + 1;
}

return `${addZero(dayOut)}/${addZero(monthOut)}/${yearOut}`;
}