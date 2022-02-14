
var longestCommonPrefix = function (strs) {

    var emptyStr = '""'
    var newStrs = strs[0]
    for (var i = 0; i < newStrs.length; i++) {
        let newWord = strs[0][i];
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] != newWord) {
                return emptyStr;
            }
        }
        return '"' + newWord + '"';
    }

};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))