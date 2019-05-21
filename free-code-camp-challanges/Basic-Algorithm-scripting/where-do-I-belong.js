function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
arr.push(num)
arr.sort(function(a,b){return a - b})
return arr.indexOf(num)
}
console.log(getIndexToIns([5, 3, 20, 3], 5))
console.log(getIndexToIns([], 56))
console.log(getIndexToIns([40, 30, 63, 60], 50));