const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


//sort
function task1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(ages);

    console.log(ages[0]); //min element
    console.log(ages[ages.length - 1]); //max element
}

//median age
function task2(arr) {
    if(arr.length % 2 != 0){
        console.log(arr[(arr.length - 1) / 2]);
    }
    else{
        let ans = (arr.length - 1)/2;
        console.log(arr[Math.floor(ans)]);
        console.log(arr[Math.ceil(ans)]);
    }
}

//average age
function avg(arr) {
    let count = 0;
    for(let i = 0 ; i < arr.length ; i++){
        count += arr[i];
    }
    console.log(count / arr.length);
}