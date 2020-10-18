//Flattening
let array = [[1,2,3,4],[5,6,7,8]]
console.log(array.reduce((flat,current) =>flat.concat(current),[]))
//Your Own Loop
let loop = (start,test,update,body)=>{
    for(let value = start;test(value); value = update(value)){
        body(value)
    }
}
console.log(loop(3, n => n > 0, n => n - 1, console.log));
function every(array,predicate) {
    for(let element of array){
        if(!predicate(element)) return false
    }
    return true
}


function every2(array,predicate) {
    return !array.some(element=>!predicate(element))
}
console.log(every2([5,15], n => n < 10));