function des(arr) {
    var args = Array.from(arguments)
    args.splice(0, 1)
    var target = args
    newArr = []
    for (var num of arr) {
        if (target.indexOf(num) === -1) {
            newArr.push(num)
        }
    }
    return newArr
     console.log(target)
     var args = Array.from(arguments)
      args.splice(0,1)
      var target= args;
       newArr = []
      for (var num of arr){
      if (target.indexOf(num) ===-1){
     newArr.push(num)
      }
      }
     return newArr
}
 console.log(des([1, 2, 3, 1, 2, 3], 3, 1));

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var newStr = str.trim().toLowerCase().replace(/[\s+]/g, "-")
    return newStr
}

 console.log(spinalCase("thisIsSpinal<wbr>Tap"));



