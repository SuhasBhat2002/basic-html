'use strict';
//it resticts some fucture reserve words and helps avoid mistakes
//const interface = 'audio'
//const private = 'damn' doesnt work as java script has reserved it to make future
//logic
//const if = csoivns doesnt work because it is used in 'if' statement

function cutfruitpeice(fruit){
return fruit*4;
}


function fruitProcessor(appels,oranges){
    const applepieces = cutfruitpeice(appels);
    const orangepieces = cutfruitpeice(oranges);

    const juice = `the juice is made up of ${applepieces} appel peices and ${orangepieces} orange peices`
return juice;
}
console.log(fruitProcessor(10,6));
const drink = fruitProcessor(11,8);
console.log(drink);


function callAge(birthYear){
    return 2037-birthYear;
}

const age1 = callAge(1987);
console.log(age1)

const calcage2 = birthYear=> 1985 - birthYear;
const age3 = calcage2(1940)
console.log (age3);

const calcage6 = birthYear=> 1981 - birthYear;
//lets try
console.log (calcage2);