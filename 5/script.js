function flatArray(arr) {
    arr = arr.flat(Infinity);
    return arr;
}
console.log(flatArray([[2, 3], 5, [[[2, 9], 4], 4], 1, 0]))