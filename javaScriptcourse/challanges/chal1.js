const markMass = 78;
const markHeight = 1.67;
const johnMass = 60;
const johnHeight = 1.58;

const BMImark = markMass/markHeight**2;
const BMIjohn = johnMass/johnHeight**2;
const whoseHigher = BMImark>BMIjohn;

console.log(BMImark,BMIjohn,whoseHigher);