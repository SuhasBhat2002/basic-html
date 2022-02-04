localStorage.setItem('Army','100');
localStorage.setItem('Generals','3');
var myLegion = localStorage.getItem('Army')
console.log(myLegion)

console.log(localStorage.getItem('Generals'));

let mybutton = document.querySelector('button');
let myHeading = document.querySelector('h1');


  // With a named function
let myGreeting = setTimeout(function sayHi() {
  alert('Hello, Mr. Universe!');
}, 2000);

// With a function defined separately
function sayHi() {
  alert('Hello Mr. Universe!');
}

let myGreeting = setTimeout(sayHi, 2000);
