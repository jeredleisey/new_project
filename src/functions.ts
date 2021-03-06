function add_old(n1: number, n2: number) {
    return n1 + n2;
}

function printResults(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result)
}

printResults(add_old(5, 12));

let combineValues: (a: number , b: number) => number;

combineValues = add_old;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
})

