"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
printResults(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
