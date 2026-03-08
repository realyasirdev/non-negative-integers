function finder(arr1, arr2){

    let sum1 = arr1.reduce((a,b)=>a+b,0);
    let sum2 = arr2.reduce((a,b)=>a+b,0);

    return sum1 - sum2;
}

console.log(finder([1,2,3,4,5,6,7],[3,7,2,1,4,6]));