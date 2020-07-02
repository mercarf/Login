'use strict';

//SELECTORS...
const showError = document.querySelector('.js-error');
const password = document.querySelector('.js-user-password');
const userName = document.querySelector('.js-user-name');
const loginButton = document.querySelector('.js-login-button');

//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
  name: 'front23',
  password: 'bicicleta',
};

//FUNCTIONS
const showMessage = function () {
  // Nada más clickear el botón, se considera un intento, por lo que antes de analizar nada con condicionales, tenemos que incrementar el valor de attempts por 1. Esto lo podemos hacer con dos operadores:
  // attemps += 1;
  // acc += arr[i] es igual a acc = acc + arr[i]
  //i++ es abreviación de i = i + 1
  // attemps++; -> Escojo esta porque es más corta
  attemps++;
  const nameValue = userName.value;
  const passwordValue = password.value;

  showError.classList.add('hidden');

  if (nameValue === userInfo.name && passwordValue === userInfo.password) {
    alert('Estás dentro');
  } else if (attemps > 3) {
    alert('Estás bloqueado');
  } else if (
    nameValue !== userInfo.name ||
    passwordValue !== userInfo.password
  ) {
    showError.classList.remove('hidden');
  }
  console.log(nameValue);
  console.log(passwordValue);
  console.log(attemps);
};

//LISTENERS
loginButton.addEventListener('click', showMessage);
