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
