const types = [
  true,
  'abc',
  1.23,
  null,
  undefined,
  [1, 2, 3],
  { a: 1 },
  function (a) { return a },
  class A { },
  () => { }
];

types.forEach(function (type) {
  console.log(`${typeof type}`);
});
