function diffArray(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var e = 0; e < arr2.length; e++) {
            if(arr1[i] === arr2[e])newArr.push(arr1[i])
        }
    }
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));