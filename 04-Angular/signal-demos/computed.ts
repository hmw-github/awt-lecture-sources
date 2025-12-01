import { signal, computed } from '@angular/core';

const count = signal(0);
// arrow function is called whenever "count" changes
const doubleCount = computed(() => count() * 2);

console.log(doubleCount());  // 0
count.set(5);
console.log(doubleCount());  // 10 (automatically updated!)
