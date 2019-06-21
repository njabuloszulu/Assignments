function romanize(num) {
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    var romanized = ""
    for (var i = 0; i < numbers.length; i++) {
        while (numbers[i] <= num) {
            romanized += roman[i]
            num -= numbers[i]
        }
    }
    return romanized
}
console.log(romanize(9));
