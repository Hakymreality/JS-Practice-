const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
    unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
    };
    hummus(4)


function findSolution(target = 13) {
    return find(1, "1");
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
}


console.log(findSolution());
function zeroPad(number,pad) {
    let stringed = String(number)
    while (stringed.length < pad) {
        stringed = "0"+ stringed;
    }
    return stringed;
}

function amountLogic(amount,word) {
    if (amount > 1) {
        word+='s'
    }
    return `${word}`
}

function farmPrinter(animal, amount) {
    return console.log(`${zeroPad(amount,3)} ${amountLogic(amount,animal)}`);
}
console.log(farmPrinter("cow",5))
console.log(farmPrinter("goat",17))
console.log(farmPrinter("sheep",82))
console.log(farmPrinter("sheep",1))