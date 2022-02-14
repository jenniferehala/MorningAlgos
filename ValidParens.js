/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let count = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] === ")") {
            count++
        }
        if (s[i] === "(") {
            count--
        }
    }
    if (count !== 0) {
        return false;
    } else if (count == 0) {
        return true;
    }
}
console.log(isValid("()()"))