'use strict';
//it resticts some fucture reserve words and helps avoid mistakes
//const interface = 'audio'
//const private = 'damn' doesnt work as java script has reserved it to make future
//logic
//const if = csoivns doesnt work because it is used in 'if' statement

function fruitProcessor(appels,oranges){
    const juice = `the juice is made up of ${appels} appels and ${oranges} oranges`
return juice;
}
console.log(fruitProcessor(10,6));
const drink = fruitProcessor(11,8);
console.log(drink);