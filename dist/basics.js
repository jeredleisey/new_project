"use strict";
function add_old2(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add_old2(number1, number2, printResult, resultPhrase);
console.log(result);
//# sourceMappingURL=basics.js.map