const bill = 275;
const tip = bill >=50 && bill <= 300 ? bill*0.15 : bill*0.2;

console.log(`the bill was ${bill},the tip was ${tip},and total value is ${bill+tip}`)