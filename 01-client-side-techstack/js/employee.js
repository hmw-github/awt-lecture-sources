/**
 * Code the following program
	- Anna is an Employee which is also a Person
	- Persons have a name and an age
	- an employee has all that plus an employee number
    each person as well as each employee has getters and setters for all attributes and can produce a string representation
 */

class Person {
  #name; // the name of the person (private)
  #age; // the age of the person (private)

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
    return `name = ${this.#name}, age = ${this.#age}`;
  }
}

class Employee extends Person {
  #nr; // employee number (private)

  constructor(name, age, nr) {
    super(name, age);
    this.#nr = nr;
  }

  toString() {
    return super.toString() + ", nr = " + this.#nr;
  }
}
/*
const anna = new Employee("Anna", 21, 4711);
console.log(anna.toString());

if (
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null
) {
  console.log("Running in Node.js");
  module.exports = { Employee };
} else {
  console.log("Not running in Node.js (likely a browser)");
}

*/