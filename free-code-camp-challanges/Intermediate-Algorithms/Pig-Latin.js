function translatePigLatin(str) {
    var firstVowel = str.match(/[aeiou]/)
    var firstPosition = str.indexOf(firstVowel)
    if (firstPosition > 0) {
        return str.slice(firstPosition) + str.slice(0, 1) + "ay"
    } else if (firstPosition !== 0) {
        return str + "ay"
    } else {
        return str + "way"
    }

}

console.log(translatePigLatin("glove"))
