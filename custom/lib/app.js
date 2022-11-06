"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doNothing = exports.doSomething = void 0;
console.log("This is my first package on npm");
const doSomething = () => {
    console.log("doSomething");
};
exports.doSomething = doSomething;
const doNothing = () => {
    console.log("doNothing");
};
exports.doNothing = doNothing;
