/**
 * Let's code the following program in JS:
 * - Anna is an Employee which is also a Person
 * - Persons have a name and an age
 * - an employee has all that plus an employee number
 * - each person as well as each employee has getters and setters 
 * - for all attributes and can produce a string representation
 * - test your code using the following main program:
 */

class Person {
  #name 
  #age

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }

  toString() {
    return `name=${this.#name}, age=${this.#age}`;
  }
}

class Employee extends Person {
  #nr

  constructor(name, age, nr) {
    super(name, age);
    this.#nr = nr;
  }

  toString() {
    return super.toString() + `, nr=${this.#nr}`;
  }
}


// main
const anna = new Person('Anna', 23);
console.log(anna.name);
const annaEmployee = new Employee('Anna', 23, 4711);
console.log(annaEmployee.toString());