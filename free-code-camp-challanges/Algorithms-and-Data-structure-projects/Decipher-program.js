function rot13(str) {

    var decoded = {
        a: 'n', b: 'o', c: 'p',
        d: 'q', e: 'r', f: 's',
        g: 't', h: 'u', i: 'v',
        j: 'w', k: 'x', l: 'y',
        m: 'z', n: 'a', o: 'b',
        p: 'c', q: 'd', r: 'e',
        s: 'f', t: 'g', u: 'h',
        v: 'i', w: 'j', x: 'k',
        y: 'l', z: 'm',
    }

    str = str.toLowerCase()

    var decipher = [];
    var punctuation = []
    for (var i = 0; i < str.length; i++) {
        decipher.push(decoded[str[i]])
        if (str[i] === "?") {
            punctuation.push(str[i])
        }
        if (str[i] === "!") {
            punctuation.push(str[i])
        }
        if (str[i] === ".") {
            punctuation.push(str[i])
        }
    };
    return decipher.toString().toUpperCase().replace(/\,,/g, ' ').replace(/\,/g, '')+punctuation;
}

console.log(rot13('SERR PBQR PNZC!'));