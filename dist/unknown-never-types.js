"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Jered';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
//# sourceMappingURL=unknown-never-types.js.map