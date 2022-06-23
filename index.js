// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Callback in JS</h1>`;

/*----------- synchronous callback example------------- */
function callbackFunction() {
  console.log('callback function called !');
}

function greet(funcAsArgument) {
  console.log('inside greet function');
  funcAsArgument();
}

greet(callbackFunction);

/*----------- asynchronous callback example----------- */

setTimeout(callbackFunction, 3000);

setTimeout(function () {
  console.log('Hey, I am anonymous function');
}, 6000); /* callback function as anonymous function */

setTimeout(() => {
  console.log('Hey ! I am arrow function');
}, 9000); /* callback function as arrow function */

/* -------callback in event declarations------------ */

document
  .querySelector('#callerButton')
  .addEventListener(
    'click',
    callbackFunction
  ); /* callback used in event declarations */

/*----------- callback in promises----------------- */

const promise = new Promise((resolve, reject) => {
  /* when producing promise */
  resolve('Promise successfully produced and resolved !');
  reject(new Error('Promise produced and rejected'));
});

/* consuming promise */
promise.then(
  (result) => successCallbackFunction(),
  (error) => failCallbackFunction()
); /* callback functions  = successCallbackFunction & failCallbackFunction*/

function successCallbackFunction() {
  console.log('inside successCallbackFunction');
}

function failCallbackFunction() {
  console.log('inside failCallbackFunction');
}
