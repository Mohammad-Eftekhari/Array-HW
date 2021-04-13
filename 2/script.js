function combineAndSort(arr1, arr2, ...arrays) {
    let merge = arr1.concat(arr2, ...arrays)
    merge.sort(function (a, b) {
        return a - b;
    });
    return merge;
}
console.log(combineAndSort([1, 4, 5, 2, 0.5], [4, 5, 2, 1, 3, 0], [22, 44, 55, 66], [1000]))