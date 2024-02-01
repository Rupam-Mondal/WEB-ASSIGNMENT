/**
 * The below example will help to understand it more clearly
 * because the innner function will be executed after 4 sec
 * but still it has access to i and j those. This concept is known as 
 * closure. closure gives us the access of outer function's scope
 * from inner function.If we run this program in console then we will see
 * in the propertise section there are two scope of inner function one is
 * global and another one closure..This the process the scoping is done.
*/

function outer(p1) {
    let j = p1;
    let i = 5;
    return function inner() {
        setTimeout(() => {
            console.log(i + j);
        } , 4000);
    }
}
const ans = outer(6);
ans();