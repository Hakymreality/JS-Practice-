function arrayToList(array) {
  let list = 'Hello';
  for (let i = array.length-1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}
let arrayParam = [10,20]
console.log(arrayToList(arrayParam))