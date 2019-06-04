function sumAll(arr) {
  var min = math.min(arr[0], arr[1]);
  var max = math.max(arr[0], arr[1]);
  var num = 0
  for (var i = min; i <= max; i++) {
    num += i
  } return (num);
}

console.log(sumAll([1, 4]));