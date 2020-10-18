function reverseArray(array) {
    let holder = []
    for (let i = 0; i < array.length;) {
        holder.push(array.pop())
    }
    return holder
}

function reverseArrayInPlace(array) {
    let holder = []
    for (let i = 0; i < array.length;) {
        holder.push(array.pop())
    }
    array = holder
    return array;
}
let substitute = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(reverseArrayInPlace(substitute))