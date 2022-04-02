const calcTip = function(bill){
    if(bill >= 50 && bill<=300) {
        return bill*0.15
    }
    else{
        return bill*0.2
    }
}


const bill = [125,555,44];

const t1 = console.log(calcTip(bill[0]));
const t2 = console.log(calcTip(bill[1]));
const t3 = console.log(calcTip(bill[2]));

const toatalTip = [t1,t2,t3];
console.log(toatalTip)