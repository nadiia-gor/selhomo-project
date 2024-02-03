const lights = document.querySelectorAll('.light');
let activeLight = 0;
const change = document.querySelector('#changeColor');

change.addEventListener('click', () => {
  lights.forEach((light) => {
    light.style.backgroundColor = '#353535';
  });

  switch (lights[activeLight].id) {
    case 'red':
      lights[activeLight].style.backgroundColor = 'red';
      break;
    case 'yellow':
      lights[activeLight].style.backgroundColor = 'yellow';
      break;
    case 'green':
      lights[activeLight].style.backgroundColor = 'green';
      break;
  }

  activeLight = (activeLight + 1) % lights.length;
});
