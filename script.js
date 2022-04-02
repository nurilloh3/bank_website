'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

const openModalWindow = function (e) {
  e.preventDefault()
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalWindow.length; i++)
  btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

console.log(document.documentElement);
console.log(document.querySelectorAll('.section'));
console.log('salom');

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'Biz bu saytda cookie ishlatamiz';
message.innerHTML = 'Biz bu saytda cookie ishlatamiz <button class="btn btn--close-cookie">Okay</button>';
const header = document.querySelector('header');
header.prepend(message)
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove()
})

console.log(document.documentElement);