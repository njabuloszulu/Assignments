function getLargestNumbers(arr){
    let largestNumbers = [];
    for (let i = 0;i < arr.length; i++){
        let maximum = Math.max.apply(Math,arr[i])
        largestNumbers.push(maximum)
    }
    return largestNumbers
}
console.log(getLargestNumbers([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))