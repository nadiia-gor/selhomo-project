// Мінімум
// Task1 способи створення функцій:
// Function Declaration
// Function Expression
// Arrow Function

// Task 2

function arg() {
  return arguments.length;
}

// Task 3
function mintask3() {
  const number1 = parseInt(document.getElementById("first-number-min3").value);
  const number2 = parseInt(document.getElementById("second-number-min3").value);
  let answer;
  let textColor;
  if (isNaN(number1) || isNaN(number2)) {
    answer = "Incorrect number";
  } else {
    if (number1 > number2) {
      answer = "1";
    }
    if (number1 < number2) {
      answer = "-1";
    }
    if (number1 === number2) {
      answer = "0";
    }
  }
  switch (answer) {
    case "0":
    case "1":
    case "-1":
      textColor = "text-success";
      break;
    case "Incorrect number":
      textColor = "text-danger";
      break;
  }
  document.getElementById(
    "answer-min3"
  ).innerHTML = `<span class="${textColor}">${answer}</span>`;
}

// Task 4

function factorial(n) {
  if (n === 1) {
    return 1;
  } else return n * factorial(n - 1);
}

function mintask4() {
  const number = parseInt(document.getElementById("number-min4").value);
  let answer;
  let textColor;
  if (isNaN(number) || number < 0) {
    answer = "Incorrect number";
  } else if (number === 0) {
    answer = "1";
  } else {
    answer = factorial(number);
  }
  switch (answer) {
    case "Incorrect number":
      textColor = "text-danger";
      break;
    default:
      textColor = "text-success";
      break;
  }
  document.getElementById(
    "answer-min4"
  ).innerHTML = `<span class="${textColor}">${answer}</span>`;
}

// Task 5

function mintask5() {
  const number1 = parseInt(document.getElementById("number1-min5").value);
  const number2 = parseInt(document.getElementById("number2-min5").value);
  const number3 = parseInt(document.getElementById("number3-min5").value);
  let answer;
  let textColor;
  if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    answer = "Incorrect number";
  } else {
    answer = number1 * 100 + number2 * 10 + number3;
  }
  switch (answer) {
    case "Incorrect number":
      textColor = "text-danger";
      break;
    default:
      textColor = "text-success";
      break;
  }
  document.getElementById(
    "answer-min5"
  ).innerHTML = `<span class="${textColor}">${answer}</span>`;
}

// Task 6

function mintask6() {
  const number1 = parseInt(document.getElementById("number1-min6").value);
  const number2 =
    document.getElementById("number2-min6").value === ""
      ? number1
      : parseInt(document.getElementById("number2-min6").value);
  let answer;
  let textColor;
  if (!isNaN(number1) && !isNaN(number2)) {
    const resultString =
      number1 === number2
        ? "The area of the square is: "
        : "The area of the rectangle is: ";
    answer = resultString + number1 * number2;
  } else {
    answer = "Incorrect number";
  }
  switch (answer) {
    case "Incorrect number":
      textColor = "text-danger";
      break;
    default:
      textColor = "text-success";
      break;
  }

  document.getElementById(
    "answer-min6"
  ).innerHTML = `<span class="${textColor}">${answer}</span>`;
}

// Норма
// Task 1

function determinePerfectNumber(number) {
  let acc = 0; // сума дільників
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      acc += i;
    }
  }
  return number === acc;
}

function normaltask1() {
  const number = parseInt(document.getElementById("number-normal1").value);
  let answer;
  let textColor;

  if (number < 1 || isNaN(number)) {
    answer = "Incorrect number.";
    textColor = "text-danger";
  } else {
    const isNumberPerfect = determinePerfectNumber(number);
    switch (isNumberPerfect) {
      case true:
        answer = "The entered number is perfect.";
        textColor = "text-success";
        break;
      case false:
        answer = "The entered number is not perfect.";
        break;
    }
  }

  document.getElementById(
    "answer-normal1"
  ).innerHTML = `<span class="${textColor}">${answer}</span>`;
}

// Task 2

function normaltask2() {
  const number1 = parseInt(document.getElementById("number1-normal2").value);
  const number2 = parseInt(document.getElementById("number2-normal2").value);
  let answer;
  let textColor;
  let listOfNumbers = "";

  if (isNaN(number1) || isNaN(number2)) {
    answer = "Incorrect number.";
    textColor = "text-danger";
  } else if (number1 < 1 || number2 < 1) {
    answer = "The number must be greater than zero.";
    textColor = "text-danger";
  } else {
    for (let i = number1; i <= number2; i++) {
      if (determinePerfectNumber(i)) {
        listOfNumbers += `${i} `;
      }
    }
    answer =
      listOfNumbers.length !== 0
        ? `The perfect numbers are: ${listOfNumbers}`
        : `There are no perfect numbers`;
    textColor = listOfNumbers.length !== 0 ? "text-success" : "";
  }
  document.getElementById(
    "answer-normal2"
  ).innerHTML = `<span class="${textColor}">${answer}</span>`;
}
