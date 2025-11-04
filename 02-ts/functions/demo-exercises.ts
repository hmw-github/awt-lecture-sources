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
// without default value
function applyDiscount(price: number, discount?: number): number {
  if (!discount) { // null or undefined
    discount = 0.05;
  }
  return price * (1 - discount);
}

// with default value
function applyDiscount2(price: number, discount: number=0.05): number {
  return price * (1 - discount);
}

// testing
console.log(applyDiscount(100.0));
console.log(applyDiscount(100.0, 0.2));
console.log(applyDiscount2(100.0));
console.log(applyDiscount2(100.0, 0.2));

// Task 2
function createMap<T>(...params: T[]): Map<number, T> {
  //.                 key type, value type
  const map = new Map< number,   T>();
  params.forEach((value, index) => map.set(index, value));
  return map;
}

// testing
const numbers = createMap<number>(1, 2, 3); // { 0: 1, 1: 2, 2: 3 }
console.log(numbers);
const strings = createMap('Hello', 'World', '!'); // TS infers T from the parameters
console.log(strings);

// Task 3
function calculate(x: number, y: number, operation: (x: number, y: number) => number): number {
  return operation(x, y);
}


// testing
console.log(calculate(1, 4, (x, y) => x + y));
console.log(calculate(1, 4, (x, y) => x * y));