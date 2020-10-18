function flattening(arr) {
    let storage = []
    for(let each in arr){
        for(let sb in arr[each]){
            storage.push(arr[each][sb])
        }
    }
    return storage;
}
console.log(flattening([[1,2,3,4],[5,6,7,8]]))
console.log([1, 2, 3, 4].reduce((a, b) => a + b));