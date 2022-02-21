const dolphine = 97 + 112 + 101;
const averageD = dolphine/3;

const koalas = 109 + 95 + 106;
const averageK = koalas/3;

if (averageD > averageK && averageD >= 100) {
    console.log('winner is dolphine');
}else if(averageD < averageK && averageK >= 100){
    console.log('koalas is the winner');
}else if(averageD===averageK){
console.log('the match is a draw');
}else{
    console.log('this us unknown error')
}

console.log('suprise')