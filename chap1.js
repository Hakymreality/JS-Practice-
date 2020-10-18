for (let hash = " "; hash.length < 8;) {
    hash += '#'
    console.log(hash);
}

for (let i = 0; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}




//Size is the amount of cells you want 
//to have both horizontally and 
//vertically
let size = 8;

// Board is the cell itself
let board = "";

//Y is the y axis that is vertical
for (let y = 0; y < size; y++) {
    // X is the x axis that is horizontal
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);






