/**
 * Implement the following functions according to the prototypes given 
 * (or implement one with parameter of type "any"):
    function toArray(item: string): string[];
    function toArray(item: number): number[];
    function toArray(item: string[]): string[];
    function toArray(item: number[]): number[]
 */

function toArray(item: string): string[];
function toArray(item: number): number[];
function toArray(item: string[]): string[];
function toArray(item: number[]): number[];

function toArray(item: string | number | string[] | number[]): string[] | number[] {
   if (typeof item === 'string' || typeof item === 'number') {
      return [item] as (string[] | number[]);
   }
   
   // check if item is an array
   if (Array.isArray(item)) {
      return item;
   }
   throw new Error('illegal argument: should be either string, number, string[] or number[]');
}

/* usage */
console.log(toArray('string'));
console.log(toArray(42));
console.log(toArray(['a', 'b']));
console.log(toArray([1, 2, 3]));
