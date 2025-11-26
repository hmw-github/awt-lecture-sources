import { signal } from '@angular/core';

// Create signal
const count = signal(0); // inital value 0

// Read value (with parentheses!)
console.log(count());  // 0

// Set value
count.set(5);

// Update value (based on old value)
count.update(value => value + 1);

console.log(count());  // 6
