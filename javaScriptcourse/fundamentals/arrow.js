const tillRetirement = (birthyear,firstname) => {
    const age = 2037 - birthyear;
    const retairment = 65 - age;
    return `${firstname} retires in ${retairment} years`
    
}
console.log(tillRetirement(1987,'john'))

const calcage5 = function(birthyear){
    return 2037 - birthyear
}

const tillRetirement2 = function (birthyear,firstname) {
    const age = calcage5(birthyear);
    const retairment = 65 - age;
    return `${firstname} retires in ${retairment} years`
    
}

console.log(tillRetirement2(1991,'derrick'))
console.log(tillRetirement2(5366,'Alton's)) 
