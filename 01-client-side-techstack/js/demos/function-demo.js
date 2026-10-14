
function printAll(...rest) {
  rest.forEach(n => console.log(n));
}

// default parameter demo
function calculateVAT(amount, vatPercentage=0.19) {
  return amount * vatPercentage;
}

// arrow function demo
const calculateVATArrow = (amount, vatPercentage=0.19) => amount * vatPercentage;

printAll(1, 2, 3, 'aaa', { name: 'xyz'});
const vat = calculateVAT(100);
console.log(`vat = ${vat}`);
const vat2 = calculateVATArrow(100);
console.log(`vat2 = ${vat2}`);
