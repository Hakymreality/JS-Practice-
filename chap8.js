'use strict'
let buhari = "Stupid president";
console.log(buhari)

function Person(name, age) {
    this.name = name;
    this.age = age
}
let obasanjo = 'Yoruba Guy'
const Osibanjo = new Person('Yemi', 52);
console.log(Osibanjo.name)

function testForVariable(variable) {
    if (!!variable === true) return `All clear for ${variable}`
    return `You didn't define ${variable}`
}
console.log(testForVariable(obasanjo))

let dateRegex = new RegExp(/\d{1,2}-\d{1,2}-\d{4}/)
let today = '4-21-2020'
console.log(today.match(dateRegex))
console.log(new Date(2003,6,5).getTime())
function getDate(string) {
    let[_,month,day,year] =
    /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(string);
    debugger
    return new Date(year,month - 1,day)
}
console.log(getDate('1-30-2003'))
console.log(/\bcat\b/.test("cat&"));

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g,"")
}
console.log(stripComments(
    `// Hey this is your comment play with it,
    /*Another Type of comment
    Play with it too*/
    5+8`
    ))