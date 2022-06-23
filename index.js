// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Callback in JS</h1>`;

/* synchronous callback example */
function callbackFunction() {
  console.log('callback function called !');
}

function greet(funcAsArgument) {
  console.log('inside greet function');
  funcAsArgument();
}

greet(callbackFunction);

/* asynchronous callback example */

setTimeout(callbackFunction, 3000);

setTimeout(function () {
  console.log('Hey, I am anonymous function');
}, 6000); /* callback function as anonymous function */

setTimeout(() => {
  console.log('Hey ! I am arrow function');
}, 9000); /* callback function as arrow function */

document
  .querySelector('#callerButton')
  .addEventListener(
    'click',
    callbackFunction
  ); /* callback used in event declarations */
