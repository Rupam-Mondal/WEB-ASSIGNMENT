const shoppingcart = ['Milk' , 'Coffee' , 'Tea' , 'Honey'];


//added meat at first
shoppingcart.unshift('Meat');
console.log(shoppingcart);


//added sugar at the end
shoppingcart.push('Sugar');
console.log(shoppingcart);

//remove honey
for(let i = 0 ; i < shoppingcart.length ; i++){
    if(shoppingcart[i] == 'Honey'){
        shoppingcart.splice(i , 1);
    }
}
console.log(shoppingcart);

//update tea to green tea
for(let i = 0 ; i < shoppingcart.length ; i++){
    if(shoppingcart[i] == 'Tea'){
        shoppingcart[i] = 'Green Tea'
    }
}
console.log(shoppingcart);