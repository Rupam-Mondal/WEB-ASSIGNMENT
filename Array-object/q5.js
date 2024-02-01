const person = {
    name: "Alice",
    age: 22,
    major : "Computer Science",
    GPA : 3.8,
    isEnrolled : true
};

for (let key in person) {
    if(key == 'GPA'){
        person[key] = 9.2;
    }
    if (key == 'name') {
        person[key] = "Rupam";
    }
    console.log(`${key} : ${person[key]}`);
}

function displaystudentinfo(person) {
    for (let key in person) {
        console.log(`Property : ${key} , Value :${person[key]}`);
    }
}
displaystudentinfo(person)