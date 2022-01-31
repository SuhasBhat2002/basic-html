localStorage.setItem('Army','100');
localStorage.setItem('Generals','3');
var myLegion = localStorage.getItem('Army')
console.log(myLegion)

console.log(localStorage.getItem('Generals'));

let mybutton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function King(){
    let king_title = prompt('The sorcerer supreme');
    localStorage.setItem('title',king_title);
    myHeading.textContent = 'suhas' + king_title;
}

if(!localStorage.getItem('title')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('title');
    myHeading.textContent = 'suhas, ' + storedName;
  }
  myButton.onclick = King(){
  
    setUserName();
  }
  