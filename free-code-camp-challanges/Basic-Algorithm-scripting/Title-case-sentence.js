function titleCase(str) {
    let words = str.split(" ");
    let result = [];

    for (var word of words) {
        result.push(word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase());

    }

    return result.join(" ")
}
console.log(titleCase("I'm a  little tea pot"));