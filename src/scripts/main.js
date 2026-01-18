'use strict';

const promise1 = new Promise((resolve, reject) => {
  resolve('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  reject(new Error('Promise was rejected!'));
});

promise2.catch((reason) => {
  setTimeout(() => {
    const divFail = document.createElement('div');

    divFail.className = 'message error-message';
    divFail.innerText = reason;

    logo.after(divFail);
  }, 3000);
});

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  promise1.then((reason) => {
    const divSucceed = Object.assign(document.createElement('div'), {
      className: 'message',
      innerText: reason,
    });

    logo.after(divSucceed);
  });
});
