let title, imie, nazwisko, surname;
// let function, console, statusbar, false;

/* alert('this is a comment') */

/* стилі написання імен змінних:

pascal case: ThisIsAnExample
camel case: thisIsAnExample
snake case: this_is_an_example
kebab case: this-is-an-example */

title = prompt("What's your name?");

console.log('Hi, ' + title);

// рік народження
let yearOfBirth = prompt('Year of birth?');
const currentYear = 2023;
console.log('Your age is ' + (currentYear - yearOfBirth));

// периметр квадрату
let length = prompt('Enter the length of a side');
console.log('The perimeter of a square is: ' + (4 * length));

// площа окружності
let radius = prompt('Enter the radius of a circle');
console.log('The area of a circle is: ' + (Math.PI * radius**2));

// JakDojade
let distance = prompt('Enter the distance between two cities');
let time = prompt('Enter the travel time in hours');
console.log('The required speed is: ' + (distance / time));

//конвертер валют
let dollars = prompt('Enter the amount of money in USD');
const exchangeRate = 0.91;
console.log(dollars + 'USD is ' + (dollars * exchangeRate) + 'EUR');