class user {
    constructor(Subject,marks,collage_prefernce){
        this.Subject = Subject;
        this.marks = marks;
        this.collage_prefernce = collage_prefernce;

    }
}

if (user.marks <10 ) {
    console.log('you have been alloted alvas collage')
} 
if (user.marks>10){
console.log('you have been alloted MITE collage')
}

else {
    console.log('incorrect input!!')
}

var human = new user("Maths",9,"Mite")
console.log(human);


var sam = {
    name:'my name is sam',
    age: 10,
    through_cet: true,
}
var marry = {
    name:'my name is marry',
    age: 10,
    through_cet: false,
}
let users = new Map()

users.set('sam', sam);
users.set('marry',marry)

console.log(users);
console.log(users.values)

console.log(users.keys())