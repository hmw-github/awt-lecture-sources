
function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0'); // e.g. '09'
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');      // e.g. 0'06'
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const milliseconds = date.getMilliseconds().toString().padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}:${milliseconds}`;
}

/**
 * Decorator "logger": produce log ouput, example:
 *    14.10.2024 17:27:48:258: method "calculateSquare" called ...
 *    14.10.2024 17:27:48:755: method "calculateSquare" finished.
 */

// TODO

/**
 * Decorator "logExecutionTime": example output
 *    calculateSquare: 268.502ms
 */

// TODO

class MathOperations {
  // TODO: use decorators
  calculateSquare(n: number): number {
    // Simulate a time-consuming task
    for (let i = 0; i < 1_000_000_000; i++) {}
    return n * n;
  }
}
 
// call class method
const math = new MathOperations();
console.log(`Result: ${math.calculateSquare(3)}`);