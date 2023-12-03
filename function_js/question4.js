function calculateTax(income) {
    if(income >= 20000 && income <= 50000){
        return function calculate() {
            const ans = (income * 3)/100;
            console.log("Your tax is = " , ans);
        }
    }
    else if(income > 50000 && income <= 90000){
        return function calculate() {
            const ans = (income * 5)/100;
            console.log("Your tax is = " , ans);
        }
    }
    return function notax(income) {
        console.log("No tax is needed");
    }
}

const ans = calculateTax(71000)
ans();