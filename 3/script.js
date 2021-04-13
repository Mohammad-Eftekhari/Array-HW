function removeDuplicate(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicate([1, 1, 4, 5, 3, 5, 3, 9]))