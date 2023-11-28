// If grFatFr than 90 thFn A GradE
// 8 If bFtwFFn 70 and 90 thFn a B gradE
// 8 If bFtwFFn 50 and 70 thFn a C gradE
// 8 BFlow 50 thFn an F gradF

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