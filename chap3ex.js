function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1))
}
console.log(remove(["a", "b", "c", "d", "e", "f"], 4))
let testRegex = /^\w{4,}\d$/gi
let pwTest = 'Gabriel2019'
console.log(pwTest.match(testRegex))

function max(...number) {
    let counter = 0
    for (let each of number) {
        if (each > counter) {
            counter = each;
        }

    }
    return counter
}
let numbers = [0, 5, 15, 100, 1500]
console.log(max(...numbers))

function sqrt(number) {
    let index = 0;
    while (index * index != number) {
        index++
    }
    return index
}
console.log(sqrt(169))

function range(start, end, step =1) {
    let storage = []
    if (start>=end) {
        step=-1
    }
    while (start<=end) {
        storage.push(start)
        start++
    }
    while (start>=end) {
        storage.push(start)
        start--
    }
    return storage
}
console.log(range(10,2,2))

function deepEqual(a, b) {
    if (a === b) return true;
    
    //Testing for Objects
    if (a == null || a != 'object' 
     || b == null || b!= 'object') return false;

    // Converting  Objects to arrays 
    let keysA = Object.keys(a),
        keysB = Object.keys(b);

    if (keysA.length != keysB.length)return false 

    //Iterating through the Keys A array and testing based on that
    for(let each of keysA){
                                    //Recursing and making sure that they're deeply equal.
        if(!keysB.includes(each) || !deepEqual(a[each], b[each]))return false
    }
    return true 
}


let obj = {
    here: {
      is: "an"
    },
    object: 2
  };
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {
    here: 1,
    object: 2
  }));
  // → false
  console.log(deepEqual(obj, {
    here: {
        is: "an"
      },
      object: 2
    }));