import {
  OrderStatus,
  Product,
  Customer,
  Order,
  Address,
  ProductList,
  PaymentMethod,
  Result,
  RentableProduct
} from "./type-definitions.ts";

/* =========================================================
    1. Create Sample Data
   ========================================================= */

// Address (tuple)
const addressAlice: Address = ["Main Street", 12, 85049, "Ingolstadt"];
const addressBob: Address = ["Highway Road", 8, 93047, "Regensburg"];

// Customers
const alice: Customer = { id: 1, name: "Alice", email: "alice@mail.com" };
const bob: Customer = { id: 2, name: "Bob" };

// Product list (array type)
const laptopProduct: Product = { id: 1, name: "Laptop", price: 1200, category: "Electronics", inStock: true };
const products: ProductList = [
  laptopProduct,
  { id: 2, name: "Mouse", price: 25, category: "Accessories", inStock: true },
  { id: 3, name: "T-Shirt", price: 19.99, category: "Clothing", inStock: false }
];

// RentableProduct (intersection example)
const rentedLaptop: RentableProduct = {
  id: 1,
  name: "Laptop",
  price: 1200,
  category: "Electronics",
  inStock: false,
  rentTimeInDays: 14,
  rentTotalPrice: 300,
  returned: false
};

/* =========================================================
    Create Orders
   ========================================================= */

const paypalPayment: PaymentMethod = "paypal";
const order1: Order = {
  id: 1001,
  customer: alice,
  products: [products[0], products[1]],
  payment: paypalPayment,
  total: products[0].price + products[1].price,
  status: OrderStatus.Pending,
  shippingAddress: addressAlice
};

const order2: Order = {
  id: 1002,
  customer: bob,
  products: [products[2]],
  payment: "paypal",
  total: products[2].price,
  status: OrderStatus.Shipped,
  shippingAddress: addressBob
};

/* =========================================================
    3. Functions & Generics
   ========================================================= */

/**
 * TODO: implement this function
 * Divide the two numbers given.
 * @returns if divisor is non-zero, the value property value contains the result of the division.
 *          if divisor is zero, an error message is given in the error property
 */
function safeDivide(dividend: number, divisor: number): Result<number> {
  return { ok: true, value: 0 }; // dummy
}

/**
 * TODO: implement this function
 * Calculate total order value
 */
function calculateTotal(order: Order): number {
  return 0; // dummy; 
}

/* =========================================================
    4. Output Section
   ========================================================= */

console.log("=== 🏪 Shop Data Demo ===");

// Customers
console.log("👤 Customers:");
console.log(alice);
console.log(bob);

// Products
console.log("\n📦 Products:");
products.forEach(p =>
  console.log(`- ${p.name} (${p.category}) → €${p.price}`)
);

// Orders
console.log("\n🧾 Orders:");
[order1, order2].forEach(order => {
  console.log(
    `Order #${order.id} for ${order.customer.name} - Status: ${OrderStatus[order.status]}`
  );
  console.log(`  Total (calc): €${calculateTotal(order).toFixed(2)}`);
});

// Rentable product
console.log("\n💻 Rentable Product (Intersection Type):");
console.log(rentedLaptop);

// Generic result test
console.log("\n🧮 Generic Result:");
const resultOk = safeDivide(10, 2);
const resultFail = safeDivide(10, 0);
console.log("Result OK:", resultOk);
console.log("Result Fail:", resultFail);

console.log("\n✅ Demo completed successfully.");
