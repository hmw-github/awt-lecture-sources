/*
		- define array
		- access array
		- iterate with for forEach()
		- sort asc/desc
    - filter and iterate for output
  */

    const numbers = [1, 2, 3, 4, 5, 6, 7];

    console.log('1st: ' + numbers[0]);

    // sort descending using an arrow function
    numbers.sort((n1, n2) => {
      return n2 - n1;
    });
    numbers.forEach((value, index) => console.log('value: ' + value + ', index: ' + index));

  // filter an array of persons
  const persons = [
    { name: 'John', age: 34 },
    { name: 'Anna', age: 14 },
    { name: 'Peter', age: 54 }
  ];
  // output all adults
  persons
  .filter(person => person.age >= 18)
  .forEach(person => console.log(`${person.name} ${person.age}`));
  