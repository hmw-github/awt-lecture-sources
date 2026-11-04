/**
 * TODO: add the missing keywords so main.ts works!
 */

type BinaryOperator = (a: number, b: number) => number;

const calculate = (a: number, b: number, op: BinaryOperator) =>  op(a, b);

function add(a: number, b: number): number {
  return calculate(a, b, (a, b) => a + b);
}

function subtract(a: number, b: number): number {
  return calculate(a, b, (a, b) => a - b);
}

function multiply(a: number, b: number): number {
  return calculate(a, b, (a, b) => a * b);
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return calculate(a, b, (a, b) => a / b);
}

module.exports = { add, subtract, multiply, divide };