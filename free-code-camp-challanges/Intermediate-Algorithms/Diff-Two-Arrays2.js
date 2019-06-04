function diffArray(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i])=== -1){
            newArr.push(arr1[i])
        }

    }
    for (var e = 0; e< arr2.length;e++){
        if (arr1.indexOf(arr2[e]) ===-1)
            newArr.push(arr2[e])
    }
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))