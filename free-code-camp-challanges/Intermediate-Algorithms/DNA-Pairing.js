function pairElement(str) {
  var dnaPair = []

  var scan = function (pair){
    switch(pair){
      case "A":
      dnaPair.push(["A","T"]);
      break;
      case "T":
      dnaPair.push(["T","A"]);
      break;
      case "C":
      dnaPair.push(["C","G"]);
      break;
      case "G":
      dnaPair.push(["G","C"])
      break;
    }
}
for (var i = 0;i < str.length;i++){
  scan(str[i])
  }
  return dnaPair;
}

console.log(pairElement("GCG"))