const tillRetirement = (birthyear,firstname) => {
    const age = 2037 - birthyear;
    const retairment = 65 - age;
    return `${firstname} retires in ${retairment} years`
    
}
console.log(tillRetirement(1987,'john'))

const tillRetirement2 = function (birthyear,firstname) {
    const age = 2037 - birthyear;
    const retairment = 65 - age;
    return `${firstname} retires in ${retairment} years`
    
}