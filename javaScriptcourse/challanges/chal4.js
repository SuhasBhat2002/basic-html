const calcAverage = (a,b,c) => (a+b+c)/3;
console.log(calcAverage(5,6,9))

const scoreDolphins = calcAverage(44,23,71);
const scoreKolas = calcAverage(65,54,49);
console.log(scoreDolphins,scoreKolas);

if(scoreDolphins>= 2*scoreKolas){
    console.log("dolpins are the winner")
}


else if(scoreKolas >= 2*scoreDolphins){
    console.log("kolas are the winner")
}
else{
    console.log("nobody wins")
}
