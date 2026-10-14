/**
 * Define types used in index.ts
 * - array types
 * - object types
 * - union types
 * - type aliases
 * - intersection types 
 * - interfaces
 * - generics
 * - enums
 * - string literal types
 * - tuple types
 */

/**
 * string literal types:
 * define a string literal type for product categories.
 * There are: "Electronics", "Accessories" and "Clothing"
 * 
 * define a string literal type for payment methods.
 * There are: "cash", "card" and "paypal"
 */
type ProductCategory = "Electronics" | "Accessories" | "Clothing";
type PaymentMethod = "cash" | "card" | "paypal";

/**
 * define an enum type "OrderStatus".
 * An order may have a status of pending, shipped, delivered or cancelled.
 */
enum OrderStatus {
  Pending, Shipped, Delivered, Cancelled
};

/** 
 * define an address consisting of street, house number, zip code and city
 * as a tuple type
 */
type Address = [street: string, houseNumber: number, zipCode: number, city: string];

/**
 * define a customer type using a type alias.
 * A customer has an id, a name and an optional email.
 */
type Customer = {
  id: number,
  name: string,
  email?: string
};

/**
 * Define types for Product and Order using interfaces:
 * - a product has an id, a name, a price, a category and a property "inStock" (yes/no)
 * - an order has an id, a customer, products, a payment method, a total, a status and a 
 *    shipping address
 */
interface Product {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
  inStock: boolean;
}

interface Order {
  id: number;
  customer: Customer;
  products: Product[];
  payment: PaymentMethod;
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
}

/**
 * Define an object type for a rent which hast the following properties
 * rentTimeInDays, rentTotalPrice, returned (yes/no)
 */
type Rent = {
  rentTimeInDays: number, 
  rentTotalPrice: number,
  returned: boolean
};

/**
 * Define an intersection type for a rentable productbased on Product and Rent
 */
type RentableProduct = Product | Rent;

/**
 * Define a type named "ProductList" as array type
 */
type ProductList = Product[];

/**
 * Define a generic type "Result<T>" for a safe method result:
 * - the type has a property ok, which indicates that there is a "value" of type T
 * - if ok is false: instead of the value the type contains a string property "error"
 */
type Result<T> = { ok: boolean; value: T } | { ok: boolean; error: string };


export {
  OrderStatus,
  Product,
  Customer,
  Order,
  Address,
  ProductList,
  PaymentMethod,
  Result,
  RentableProduct
};