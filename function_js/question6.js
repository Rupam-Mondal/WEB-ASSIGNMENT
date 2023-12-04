function add(a , b) {
    return a + b;
}

function curry(func) {
    return function curried(...a) {
        if(a.length >= func.length){
            return func(...a);
        }
        else{
            return function(...b) {
                return curried(...a , ...b);
            }
        }
    }
}

const ans = curry(add);
console.log(ans(9  , 7));