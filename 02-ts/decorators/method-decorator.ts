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

function logger(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log(`${formatDate(new Date())}: method ${originalMethod.name} started.`);
    const result = originalMethod.call(this, ...args);
    console.log(`${formatDate(new Date())}: method ${originalMethod.name} finished.`);
    return result;
  }
  return replacementMethod;
}

function logExecutionTime(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.time(originalMethod.name); // Start timing
    const result = originalMethod.call(this, ...args);
    console.timeEnd(originalMethod.name); // End timing
    return result;
  }
  return replacementMethod;
}

class MathOperations {
  @logger
  @logExecutionTime
  calculateSquare(n: number): number {
    // Simulate a time-consuming task
    for (let i = 0; i < 1_000_000_000; i++) {}
    return n * n;
  }
}
 
// call class method
const math = new MathOperations();
console.log(`Result: ${math.calculateSquare(3)}`);