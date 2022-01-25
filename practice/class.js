class User {
    constructor(firstname,lastname,credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;

    }
    getFullname(){return `${this.firstname} ${this.lastname} is my name`;
      
    }
    editName(newname){
        const myname = newname.split(' ')
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

class teacher extends User {
    constructor(firstname,lastname,credit, art ) {
        super(firstname,lastname,credit);
        this.art = art
    }
    getFullname(){return `${this.firstname} ${this.lastname} is my name and  I specialize in ${this.art}`;}
}

const jhon = new teacher("jhon","wick",55, "sharingan");
console.log(jhon);

console.log(jhon.getFullname());

jhon.editName("Anderson Hood");
console.log(jhon.getFullname());
