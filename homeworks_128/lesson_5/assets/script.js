/* Мінімум
Task 1 */

const obj = {
  maker: 'トヨタ自動車株式会社',
  model: 'Land Cruiser 300',
  year: 2021,
  averageSpeed: 120,
  fuelCapacity: 110,
  fuelConsumption: 9.4,
  nameMapping: {
    maker: 'Maker',
    model: 'Model',
    year: 'Year',
    averageSpeed: 'Average speed',
    fuelCapacity: 'Fuel capacity',
    fuelConsumption: 'Fuel consumption',
  },
  calcFuelForDistance(distance) {
    const time = distance / this.averageSpeed;
    const fuel = (distance / 100) * this.fuelConsumption;
    return {
      time: `${(time + Math.floor(time / 4)).toFixed(2)} hours`,
      fuel: `${fuel.toFixed(1)} l`,
    };
  },
  showInfo() {
    let rez = '<ul style="list-style-type: none">';
    for (let key in this) {
      if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
        rez += `<li><b>${this.nameMapping[key]}</b>: ${this[key]}</li>`;
      }
    }
    rez += '</ul>';
    return rez;
  },
};
document.getElementById('info-list').innerHTML = obj.showInfo();

function mintask() {
  const distance = parseInt(document.getElementById('distance').value);
  let result = '<ul style="list-style-type: none">';
  if (isNaN(distance)) {
    result = '<span>Incorrect number</span>';
  } else {
    const calculatedValues = obj.calcFuelForDistance(distance);
    for (let key in calculatedValues) {
      result += `<li><b>${key}</b>: ${calculatedValues[key]}</li>`;
    }
    result += '</ul>';
  }
  document.getElementById('answer-min').innerHTML = result;
}

/* Норма
Task 1 */
const obj_time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  addZero(n) {
    return n < 10 ? '0' + n : '' + n;
  },
  showTime() {
    return `Actual time: ${this.addZero(this.hours)}:${this.addZero(
      this.minutes
    )}:${this.addZero(this.seconds)}`;
  },
  time2sec(obj = this) {
    return obj.hours * 3600 + obj.minutes * 60 + obj.seconds;
  },
  sec2time(sec) {
    this.hours = Math.floor(sec / 3600);
    this.minutes = Math.floor((sec % 3600) / 60);
    this.seconds = sec % 60;
    return {
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    };
  },
  minutes2time(min) {
    this.hours = Math.floor(min / 60);
    this.minutes = min % 60;
    this.seconds = 0;
    return {
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    };
  },
  hours2time(h) {
    this.hours = Math.floor(h);
    this.minutes = Math.floor(h * 60);
    this.seconds = 0;
    return {
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    };
  },
};

function normaltask() {
  let answer;
  obj_time.hours = document.getElementById('hours_input').valueAsNumber;
  obj_time.minutes = document.getElementById('minutes_input').valueAsNumber;
  obj_time.seconds = document.getElementById('seconds_input').valueAsNumber;

  if (
    isNaN(obj_time.hours) ||
    isNaN(obj_time.minutes) ||
    isNaN(obj_time.seconds) ||
    obj_time.hours > 24 ||
    obj_time.hours < 0 ||
    obj_time.minutes > 59 ||
    obj_time.minutes < 0 ||
    obj_time.seconds > 59 ||
    obj_time.seconds < 0
  ) {
    answer = 'Incorrect number';
  } else {
    answer = obj_time.showTime();
  }

  document.getElementById('all-time').innerHTML = answer;
}

function normaltask2(unit) {
  const userInput = document.getElementById(`amount_${unit}`).valueAsNumber;
  switch (unit) {
    case 'hours':
      obj_time.hours += userInput;
      break;
    case 'min':
      obj_time.minutes += userInput;
      break;
    case 'sec':
      obj_time.seconds += userInput;
      break;
  }
  obj_time.minutes += Math.floor(obj_time.seconds / 60);
  obj_time.seconds -= 60 * Math.floor(obj_time.seconds / 60);
  obj_time.hours += Math.floor(obj_time.minutes / 60);
  obj_time.minutes -= 60 * Math.floor(obj_time.minutes / 60);
  obj_time.hours %= 24;

  document.getElementById('all-time').innerHTML = obj_time.showTime();
}

/* Максимум
Task 1 */

const actions = {
  mul(f1, f2) {
    const result = {
      numerator: f1.numerator * f2.numerator,
      denominator: f1.denominator * f2.denominator,
    };
    return this.simplify(result);
  },
  div(f1, f2) {
    const result = {
      numerator: f1.numerator * f2.denominator,
      denominator: f1.denominator * f2.numerator,
    };
    return this.simplify(result);
  },
  gcd(num1, num2) {
    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return Math.abs(num1);
  },
  lcm(num1, num2) {
    return (num1 * num2) / this.gcd(num1, num2);
  },
  toMixedNumber(fraction) {
    const wholePart = Math.floor(fraction.numerator / fraction.denominator);
    const newNumerator = fraction.numerator % fraction.denominator;
    return {
      wholePart: wholePart,
      numerator: newNumerator,
      denominator: fraction.denominator,
    };
  },
  simplify(fraction) {
    const sign =
      Math.sign(fraction.numerator) * Math.sign(fraction.denominator);
    const absNumerator = Math.abs(fraction.numerator);
    const absDenominator = Math.abs(fraction.denominator);
    const gcd = this.gcd(absNumerator, absDenominator);
    return {
      numerator: (sign * absNumerator) / gcd,
      denominator: (sign * absDenominator) / gcd,
    };
  },
  add(f1, f2) {
    const denomLcm = this.lcm(f1.denominator, f2.denominator);
    const f1Mul = denomLcm / f1.denominator;
    const f2Mul = denomLcm / f2.denominator;
    const subfraction = {
      numerator: f1.numerator * f1Mul + f2.numerator * f2Mul,
      denominator: denomLcm,
    };
    return this.simplify(subfraction);
  },
  sub(f1, f2) {
    const denomLcm = this.lcm(f1.denominator, f2.denominator);
    const f1Mul = denomLcm / f1.denominator;
    const f2Mul = denomLcm / f2.denominator;
    const subfraction = {
      numerator: f1.numerator * f1Mul - f2.numerator * f2Mul,
      denominator: denomLcm,
    };
    return this.simplify(subfraction);
  },
};

function maxtask(opName) {
  const numerator1 = document.getElementById('numerator_input1').valueAsNumber;
  const denominator1 =
    document.getElementById('denominator_input1').valueAsNumber;
  const numerator2 = document.getElementById('numerator_input2').valueAsNumber;
  const denominator2 =
    document.getElementById('denominator_input2').valueAsNumber;
  let answer = '';
  let result;
  if (
    !isNaN(numerator1) &&
    !isNaN(denominator1) &&
    !isNaN(numerator2) &&
    !isNaN(denominator2) &&
    denominator1 !== 0 &&
    denominator2 !== 0
  ) {
    const fraction1 = {
      numerator: numerator1,
      denominator: denominator1,
    };
    const fraction2 = {
      numerator: numerator2,
      denominator: denominator2,
    };
    switch (opName) {
      case 'add':
        result = actions.add(fraction1, fraction2);
        break;
      case 'sub':
        result = actions.sub(fraction1, fraction2);
        break;
      case 'mul':
        result = actions.mul(fraction1, fraction2);
        break;
      case 'div':
        result = actions.div(fraction1, fraction2);
        break;
    }

    if (result) {
      const mixedNumber = actions.toMixedNumber(result);
      if (mixedNumber.wholePart === 1 && mixedNumber.numerator === 0) {
        answer = 'Answer: 1';
      } else {
        answer = `Answer: ${
          mixedNumber.wholePart > 0 ? `${mixedNumber.wholePart} ` : ''
        }${
          mixedNumber.numerator > 0
            ? `${mixedNumber.numerator}/${mixedNumber.denominator}`
            : '0'
        }`;
      }
    } else {
      answer = 'Invalid input!';
    }
  }
  document.getElementById('answer-max').innerHTML = `<span>${answer}</span>`;
}
