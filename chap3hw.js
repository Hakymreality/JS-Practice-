function range(start, end, step =1) {
    let storage = []
    if (step > 0) {
        while (start<end) {
            storage.push(start)
            start+=step;
        }
    }
    while (start<end) {
        storage.push(start)
        start++
    }
    while (start>end) {
        storage.push(start)
        start--
    }
    return storage
}
function sum(arr) {
    let store = 0
    for(each of arr){
        store+=each;
    }
    return store
}
console.log(range(1,10,2))
console.log(sum([1,2,3,4,5,6,7,8,9,10]))
console.log(sum(range(1, 10,2)));


