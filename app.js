console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i=1; i<=100; i++) {
    if(i % 2 == 1) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function fizzbuzz(n) {
    let out = '';
    if(n % 3 == 0) {
        out = 'FIZZ';
    }
    if(n % 5 == 0) {
        out += 'BUZZ';
    }
    return out;
}
for(let i=1; i<=100; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`)
}