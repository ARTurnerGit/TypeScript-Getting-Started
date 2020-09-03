"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.getValue = void 0;
function getInputValue(elementID) {
    var inputElement = (document.getElementById(elementID));
    return inputElement.value;
}
exports.getValue = getInputValue;
function logger(msg) {
    console.log(msg);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map