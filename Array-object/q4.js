const students = [
    {id : 1 , firstName : "John" , LastName : "Doe" , age : 20 , grade : "A"},
    { id: 2, firstName: "Jane", LastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", LastName: "Johnson", age: 19, grade: "A" }
];

//add feature
function add(arr) {
    arr.length++;
    students[arr.length - 1] = {
        id: arr.length - 1, firstName: "Bob", LastName: "Johnson", age: 19, grade: "A"
    }
}


//update feature
function update(arr , id , changeName) {
    const element = (
        function () {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    return arr[i];
                }
            }
        }
    )();

    element.firstName = changeName;
}

//delete
function deleteinfo(arr) {
    let ans = arr[arr.length - 1];
    arr.length--;
}

//display
function display(arr) {
    console.log(arr);
}

//specific grade
function grade(arr) {
    const arr1 = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].grade == "A"){
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);
}


//avarage age

function avg(arr) {
    let age = 0;
    for(let i = 0 ; i < arr.length ; i++){
        age = age + arr[i].age;
    }
    console.log(age/arr.length);
}
add(students);
update(students , 1 , "Rupam");
deleteinfo(students);
display(students);
grade(students);
avg(students);