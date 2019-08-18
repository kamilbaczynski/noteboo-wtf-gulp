"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const textbox = document.querySelector('.textarea__box--js');
const buttonSave = document.querySelector('.button__item--save-js');
const buttonLoad = document.querySelector('.button__item--load-js');
const buttonRemove = document.querySelector('.button__item--remove-js');

console.log(buttonLoad);

// textbox.addEventListener('keyup', (e) => {
//   localStorage.setItem('textbox', e.target.value);
// });
// localStorage.removeItem('textbox');

buttonSave.addEventListener('click', (e) => {
  localStorage.setItem('textbox', textbox.value);
});

buttonLoad.addEventListener('click', (e) => {
  textbox.value = localStorage.getItem('textbox');
});

buttonRemove.addEventListener('click', (e) => {
  localStorage.removeItem('textbox');
  textbox.value = null;
});

