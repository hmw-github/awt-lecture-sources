/**
 * Demo exercises:
 * 1. develop and test a function "applyDiscount" which receives a price and an optional discount. If
 *    discount is not specified, a value of 0.05 is assumed. Specifiy the parameter with and without
 *    default value!
 * 2. define and test a function "createMap" that returns a map from its variable parameter list
 * (parameter all have type T, so the function is generic). Each parameter should be stored with an
 * integer key starting from 0.
 *
 * 3. Function type exercise: define and test a function "calculate" which receives two
 * numbers and a function that performs the actual operation on the values.
 */

// task 1
// without default value: use an optional parameter "discount?"
// TODO: function applyDiscount(...)
function applyDiscount(value: number, discount?: number) {
    if (discount == undefined) {
        discount = 0.05;
    }
    return value * (1 - discount);
}

// with default value: use "discount: number = 0.05"
// TODO: function applyDiscount2(...)
function applyDiscount2(value: number, discount: number = 0.05) {
    return value * (1 - discount);
}

// testing (uncomment when implemented)
console.log(applyDiscount(100.0));       // 95
console.log(applyDiscount(100.0, 0.2));  // 80
console.log(applyDiscount2(100.0));      // 95
console.log(applyDiscount2(100.0, 0.2)); // 80

// Task 2
// use a rest parameter (...params) and return a Map<number, T>
// TODO: function createMap<T>(...)
function createMap<T>(...values: T[]) {
    const map = new Map<number, T>();

    values.forEach((value: T, index: number) => {
        map.set(index, value);
    });

    return map;
}

// testing (uncomment when implemented)
const numberMap = createMap<number>(1, 2, 3); // Map { 0 => 1, 1 => 2, 2 => 3 }
console.log(numberMap);
const strings = createMap<string>('Hello', 'World', '!'); // TS infers T from the parameters
console.log(strings);                       // Map { 0 => 'Hello', 1 => 'World', 2 => '!' }

// Task 3
// the third parameter "operation" needs a function type: (x: number, y: number) => number
// TODO: function calculate(...)
function calculate(a: number, b: number, operator: (x: number, y: number) => number) {
    return operator(a, b);
}

// testing (uncomment when implemented)
const complexFunction = (a: number, b: number) => {
    // doing complex calcs
    return a + b;
}

console.log(calculate(1, 4, (x, y) => x + y)); // 5
console.log(calculate(1, 4, (x, y) => x * y)); // 4
console.log(calculate(1, 4, complexFunction));
