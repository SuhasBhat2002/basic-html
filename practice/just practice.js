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

const convertRs = (dollars)=>{
    if (typeof dollars === 'numbers'){
        return  dollars * 75
    } else{
        throw Error('Amount needs to be in numbers')
    }
    
    }
    
    try {const myValue = convertRs(10)
        console.log(myValue)
        
    } catch (error) {
       console.log(error)
        
    }
    
    console.log('im not working fine if there are errors')
     var authorised = true

     authorised ? console.log("signout button") : console.log("LOGIN");

     console.log(Math.random() * 10)

let upper = 25
let lower = 20
let myRandom = Math.floor(Math.random()*(upper - lower)) + lower
console.log(myRandom)

let toDo = {
    day: 'monday',
    meetings: 0,
    meetingDone: 0,

     addMeeting: function(num){
this.meetings = this.meetings + num
     },
     summary: function(){
         return `you have ${this.meetings} mettings left`
     },
}

toDo.addMeeting(5)
console.log(toDo.summary())