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

const jhon = new User("jhon","wick",55);
console.log(jhon);

console.log(jhon.getFullname());

jhon.editName("Anderson Hood");
console.log(jhon.getFullname());