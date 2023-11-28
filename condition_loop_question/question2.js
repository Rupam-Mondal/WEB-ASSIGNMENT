const grade = 80
if(grade > 90 && grade <= 100){
    console.log("A");
}
else if(grade >= 70 && grade <= 90){
    console.log("B");
}
else if(grade >= 50 && grade <= 70){
    console.log("C");
}
else if(grade < 50 && grade >= 0){
    console.log("F");
}
else{
    console.log("No grade");
}