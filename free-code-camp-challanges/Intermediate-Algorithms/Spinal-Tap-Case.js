function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var str = str.replace(/([a-z](?=[A-Z]))/g,"$1 ")
  return str.toLowerCase().replace(/\ |\_/g,"-")
}

console.log(spinalCase('This Is Spinal Tap'));