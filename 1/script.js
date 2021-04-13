function deleteByIndex(arr, index) {
    console.log(arr)
    arr.splice(index, 1)
    return arr;
}
console.log(deleteByIndex([1, 4, 6, 2, 7], 2))