const modal = document.getElementById('modal-window');

const open = document.querySelector('#openModal');
open.addEventListener('click', () => {
  modal.style.display = 'block';
});

const close = document.querySelector('#closeModal');

close.addEventListener('click', () => {
  modal.style.display = 'none';
});
