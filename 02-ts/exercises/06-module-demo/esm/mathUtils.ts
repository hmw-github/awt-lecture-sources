/**
 * TODO: add the missing keywords so esm-main.ts works!
 */

type BinaryOperator = (a: number, b: number) => number;

const calculate = (a: number, b: number, op: BinaryOperator) =>  op(a, b);

______ ______ function add(a: number, b: number): number {
  return calculate(a, b, (a, b) => a + b);
}

______ function subtract(a: number, b: number): number {
  return calculate(a, b, (a, b) => a - b);
}

______ function multiply(a: number, b: number): number {
  return calculate(a, b, (a, b) => a * b);
}

______ function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return calculate(a, b, (a, b) => a / b);
}
