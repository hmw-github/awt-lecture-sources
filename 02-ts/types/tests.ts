let s: unknown; // or: any => difference?
s = "abc";
const lowerS = (s as string).toLowerCase();

let obj1;

obj1 = null; // null value - not same as undefined!
obj1 = undefined; // no value assigned

const anna: { name: string; toString: () => string } = {
  name: "Anna",
  toString: function () {
    return this.name;
  },
};

// type alias for number | string
type NumberOrString = number | string;

function add(a: any, b: any): NumberOrString {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // number
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b); // string
  }
  throw new Error("Parameters must be numbers or strings");
}

const value: NumberOrString = add('aaa', 'aaa');
console.log(add(1, 2));

// interfaces

interface Book {
  title: string;
  author: string;
  isbn?: string; // optional
  readonly isAvailable: boolean;
  toString(): string;
}

const book1: Book = {
  title: 'Hichthikers guide...',
  author: 'Douglas Adams',
  isAvailable: true,
  toString: function() { return this.title; }
};

//book1.isAvailable = true; will give error!

interface Order {  
  id: string;  
  billingDate: Date;
  bill2: (d: Date) => void;
  bill(d: Date): void;
};

class Box<T> {
  private content: T;
 
  constructor(content: T) {
      this.content = content;
  }
 
  public getContent(): T {
      return this.content;
  }
}
 
const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent());
const numberBox = new Box<number>(123);
console.log(numberBox.getContent());

// literal type

const c : 'click' = 'click';