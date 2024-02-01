const students = {
    id: 1, firstName: "John", LastName: "Doe", age: 20, grade: "A"
}

Object.preventExtensions(students);
students.op = "new"; // it will not be addded
const extensibleStatus = Object.isExtensible(students);
console.log(extensibleStatus);

const teacher = {
    subject : "Math"
}
Object.seal(teacher);
teacher.id = 1;
// console.log(teacher);

const sealedStatus = Object.isSealed(teacher);
console.log(sealedStatus);
