function myReplace(str, before, after) {
    var index = str.indexOf(before)
    if (before[0] == before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1)
    }
    return str.replace(before,after)
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("His name is Tom", "Tom", "john"))
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))