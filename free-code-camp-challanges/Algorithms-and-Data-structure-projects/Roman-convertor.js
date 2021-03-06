function romanize(str) {
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    var romanized = 0;
    for (var i = 0; i <= numbers.length; i++) {
        while (str.indexOf(romans[i]) === 0) {
            romanized += numbers[i];
            str = str.replace(romans[i], '');
        }
    }
    return romanized
}
console.log(romanize('I'));
