function extractNum(str) {
    str = str.match(/\d/g)
    num = str.join(',')
    let result = Array.from(num.split(','), Number);
    return result;
}
console.log(extractNum("i have 2 apples and 3 pineapples"))