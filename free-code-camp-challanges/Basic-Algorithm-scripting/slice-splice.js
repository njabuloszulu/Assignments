function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    const newArr1 = arr1.slice();
    const newArr2 = arr2.slice();
    newArr1.reverse();
    for (var i = 0; i < newArr1.length; i++) {
        newArr2.splice(n, 0, newArr1[i]);
    }
    // arr2.splice(1,0,arr1)
    return newArr2;
}
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));