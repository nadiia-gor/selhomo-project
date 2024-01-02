/* мінімум

task 2 */
last_name, firstName, nameAndSurname, username
// Неправильно: first-name, 1stname, name, function.

/* task 3
коментуємо код або двома слешами, якщо комментар рядковий, та слешом із зірочкою, якщо блочний. 

task 4 
Стилі написання імен змінних: camelCase, kebab-case (неактуально), PascalCase, snake_case. також змінні можуть починатися з $ або _*/

/* норма
task 1 */
function task1() {
const userName = prompt("What's your name?");
alert(`Hello, ${userName}!`);
}
// task 2
function task2(){
    const yearOfBirth = prompt('Enter your year of birth');
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(yearOfBirth);
    alert(`You are ${age} years old`);
}
// task 3
function task3() {
    const sideLength = parseInt(prompt('Enter the square side length'));
    const squarePerimeter = 4 * sideLength;
    alert(`The perimeter of square is ${squarePerimeter}`);
}
/* максимум
task 1 */
function ex1() {
    const circleRadius = parseInt(prompt('Enter radius of the circle'));
    const circleArea = (Math.PI * circleRadius ** 2).toFixed(2);
    alert(`The area of circle is ${circleArea}`);
}
// task 2
function ex2() {
    const distance = parseInt(prompt('Enter the distance between two cities in km'));
    const hour = parseInt(prompt('Enter the time you want to get there in ours'));
    const speed = distance / hour; 
    alert(`You need to drive or fly with a speed of ${speed} km/h`);
}
// task 3
function ex3() {
    const exchange = parseInt(prompt('Enter the amount of dollars'));
    const dollarToEuro = 0.8865;
    const result = (exchange * dollarToEuro).toFixed(2);
    alert(`You will have ${result} euro!`);
}