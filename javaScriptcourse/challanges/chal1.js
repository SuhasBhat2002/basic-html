const markMass = 78;
const markHeight = 1.67;
const johnMass = 60;
const johnHeight = 1.58;

const BMImark = markMass/markHeight**2;
const BMIjohn = johnMass/johnHeight**2;
const whoseHigher = BMImark>BMIjohn;

console.log(BMImark,BMIjohn,whoseHigher);
if (BMImark<BMIjohn) {
    console.log(`BMI of john(${BMIjohn}) is greater than marks(${BMImark})`)
} 
if (BMImark>BMIjohn) {
    console.log(`BMI of mark(${BMImark}) is greater than johns(${BMIjohn})`)
}else{
    console.log('go shit yourself hacker')
}