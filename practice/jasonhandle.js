const student = {
    name : alpha,
    age : 55,
    isActive: true

}

const studentString = JSON.stringify(student)
console.log(typeof studentString);

const tojason = JSON.parse(studentString);
console.log(typeof tojason);
console.log(tojason.age);