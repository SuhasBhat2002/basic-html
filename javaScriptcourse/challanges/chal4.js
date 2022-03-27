const calcAverage = (a,b,c) => (a+b+c)/3;
console.log(calcAverage(5,6,9))

const scoreDolphins = calcAverage(44,23,71);
const scoreKolas = calcAverage(65,54,49);
console.log(scoreDolphins,scoreKolas);

if(scoreDolphins>scoreKolas){
    console.log("dolpins are the winner")
}
else{
    console.log("kolas are the winner")
}