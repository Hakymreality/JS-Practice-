function minFinder(num1, num2) {
    if (num1 < num2) {
        return num1
    }else {
        return num2
    }
}
console.log(minFinder(39,35))

function isEven(a) {
    if (a == 0) {
        return 'even'
    }else if (a == 1) {
        return 'odd'
    } else if(a<1) {
        return isEven(a + 2)
    }else{
        return isEven(a - 2)
    }
}
console.log(isEven(-8))

function countBs(string) {
    let eachy = '';
    for (let incrementor = 0; incrementor < string.length; incrementor++) {
        if (string[incrementor] === 'B') {
            eachy+= 'B'
        }
        else{
            return 'No capital B found'
        }
        
    }
    return eachy.length
}
console.log(countBs("aBrenDaB"))

function countChars(word,letter) {
    let wordy = '';
    for ( v of word) {
        if (v == letter) {
            wordy+= letter
        }
    }
    return wordy.length
}
console.log(countChars('Mohammed', 'o'))
