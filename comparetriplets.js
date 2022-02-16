function compareTriplets(a, b) {
    var Alice = 0
    var Bob = 0
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            Alice += 1
        }
        if (a[i] == b[i]) {
            Alice += 0
        }

        if (a[i] < b[i]) {

            Bob += 1

        }
    }
    return [Alice, Bob]

}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]))