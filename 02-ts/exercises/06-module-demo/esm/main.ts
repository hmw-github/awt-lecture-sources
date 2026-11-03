// Import the functions from mathUtils.ts
import add from './mathUtils'; // add is default export

// subtract is aliased
import { subtract as sub, multiply, divide } from './mathUtils';
console.log(add(5, 3));         
console.log(sub(10, 7));   
console.log(multiply(4, 6));    
console.log(divide(20, 5)); 

// note: calculate cannot be called, 
// not exported!
//calculate(1, 2, (a: number, b: number) => a + b);