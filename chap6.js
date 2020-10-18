let Rabbit = {}
Rabbit.speak = function (line) {
    return `The rabbit says ${line} `
}
console.log(Rabbit.speak("I'm alive"))

function speak(line) {
    return `The ${this.type} rabbit says '${line}'`
}
console.log(speak('Hola'))
let whiteRabbit = {
    type: "white",
    speak
}
console.log(whiteRabbit.speak("Oh my he's hungry"))
console.log(speak.call(whiteRabbit, "Moo"))

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({
    coords: [0, 2, 3],
    length: 5
});
let protoRabbit = {
    speak(line) {
        return `The ${this.type} rabbit says ${line}`
    }
}
let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = "Dangerous"
console.log(killerRabbit.speak('Hi'))

class Mouse {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        return `The ${this.type} rat says '${line}'`
    }
    walk(step) {
        return `It just walked ${step} steps Haha`
    }
    toString() {
        return `It's a ${this.type} type of rat, what else do you want?`
    }
}
const mickey = new Mouse('black-nosed');
console.log(mickey.speak('Hi Kids'))

const chinch = new Mouse('noisy');
console.log(chinch.speak('Hola'))
chinch.walk = (steps) => {
    return `It walked ${steps} steps`
}
console.log(chinch.walk(5))
console.log(String(chinch))
let symbolTest = Symbol('age')
Mouse.prototype[symbolTest] = 12;
console.log(mickey[symbolTest])
console.log(Mouse.prototype.isPrototypeOf(killerRabbit))

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);