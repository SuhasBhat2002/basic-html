const calcTip = function(bill){
    if(bill >= 50 && bill<=300) {
        return bill*0.15
    }
    else{
        return bill*0.2
    }
}


const bills = [125,555,44];


const Tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

console.log(Tip);

const total = [bills[0] + Tip[0],bills[1] + Tip[1],bills[2] + Tip[3]]

console.log(bills,Tip,total);
