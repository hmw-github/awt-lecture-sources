
function printAll(...rest) {
  rest.forEach(n => console.log(n));
}

// default parameter demo
function calculateVAT(amount, vatPercentage=0.19) {
  return amount * vatPercentage;
}

printAll(1, 2, 3, 'aaa', { name: 'xyz'});
const vat = calculateVAT(100);
console.log(vat);