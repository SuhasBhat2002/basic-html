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

const human = user("Maths",9,"Mite")
console.log(human);