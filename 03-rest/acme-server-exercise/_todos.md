# ACME Server – Exercise TODOs

In this exercise you implement the REST endpoints of the ACME server (see the API table in `Readme.md`).
All routes are already defined in `src/routes.ts` and all data is already in memory (`src/database/Data.ts`).
Your job is to fill in the controller methods in `src/controller/`.

The TODOs are ordered **from easy to hard**. Each one builds on what you learned in the previous one,
so work through them in this order.

## Before you start

1. `npm install`
2. `npm run dev` (nodemon restarts the server every time you save a file)
3. Open `tests.http` (VS Code extension *REST Client*) and send `GET /customer`.
   You should get **`501 Not Implemented`** with a message like `TODO 1: ... not implemented yet`.

**The server is runnable at every step.** Every unfinished endpoint answers with status `501`.
When you implement a TODO, replace the `res.status(501)...` placeholder line with your code.
Only the endpoint you are working on changes. All the others keep answering `501`.

> Rule of thumb: **every code path must call `res.send(...)` exactly once.**
> If you forget it, the request hangs until the client times out.
> If you call it twice, Express throws `ERR_HTTP_HEADERS_SENT`.

### Useful building blocks

| What | How |
|---|---|
| Query parameter `/user?email=x` | `req.query.email` |
| Path parameter `/invoice/:id` | `req.params.id` |
| JSON request body (POST/PUT) | `req.body` (already parsed by body-parser in `server.ts`) |
| Send JSON | `res.set('Content-Type', 'application/json'); res.status(200).send(obj);` |
| Send status without body | `res.status(404).send();` |
| Data store | `Data.users`, `Data.customers`, `Data.invoices`, `Data.revenues` are JS `Map`s: use `get`, `set`, `has`, `delete`, `forEach`, `values()` |
| Map → array | `Array.from(map.values())` or `map.forEach(v => result.push(v))` |

---

## Level 1 – Return a whole collection

### TODO 1 – `GET /customer` – [CustomerController.ts](src/controller/CustomerController.ts)

Return all customers as a JSON array with status `200`.

**Hints**
- Customers are stored in `Data.customers` (key = id).
- A `Map` serializes to `{}` in JSON, so turn it into an array (`Customer[]`) first.
- Optionally log requests and responses with `console.log`. The solution prints `> GET /customer` / `< GET /customer => ...`.

**Test:** `### get customers` in `tests.http` → array with 6 customers.

### TODO 2 – `GET /revenue` – [RevenueController.ts](src/controller/RevenueController.ts)

Same as TODO 1, but for `Data.revenues` (key = month).

**Test:** `### get revenues` → array with 12 entries (`{ month, revenue }`).

---

## Level 2 – Look up a single object, handle "not found"

### TODO 3 – `GET /user?email=<email>` – [UserController.ts](src/controller/UserController.ts)

Return the user with the given email (`200`), or `404` if there is none.

**Hints**
- The email is a **query parameter**: `req.query.email`.
- `Data.users` uses the **email as key**, so `Data.users.get(email)` gives you the user or `undefined`.
- Use `if (user) { ... } else { ... }` and send exactly one response in each branch.

**Test:** `### get user` → `200` with the user. Change the email to something unknown → `404`.

### TODO 4 – `GET /invoice?id=<id>` – [InvoiceController.ts](src/controller/InvoiceController.ts) `getInvoiceById`

Return the invoice with the given id (`200`), or `404`.

**Hints**
- Same pattern as TODO 3, with `req.query.id` and `Data.invoices`.
- Invoice ids are generated at server start (`Data.nextId()` is based on `Date.now()`), so the `@ID` in `tests.http` is
  probably not valid. Getting a `404` is the **correct** answer for now. You can test the `200` case after TODO 6.

### TODO 5 – `DELETE /invoice/:id` – `deleteInvoice`

Delete the invoice: `200` if it existed, `404` otherwise.

**Hints**
- New: the id is a **path parameter** (`:id` in `routes.ts`), so use `req.params.id`, not `req.query.id`.
- `Data.invoices.has(id)` / `Data.invoices.delete(id)`.
- Without a body, still finish the response with `res.status(200).send()`.

**Test:** `### delete invoice` → `404` for an unknown id (you'll test `200` after TODO 6).

---

## Level 3 – Write data (request body)

### TODO 6 – `POST /invoice` – `createInvoice`

Create a new invoice from the request body. Answer `201 Created` with the **new id** as the response body.

**Hints**
- `const data = req.body;` The body contains `customer_id`, `amount`, `date` and `status`, but **no id**.
- Generate the id with `Data.nextId()`.
- `const invoice = new Invoice(id, data.customer_id, data.amount, data.date, data.status);`
- Store it: `Data.invoices.set(id, invoice);`
- `res.status(201).send(id);`

**Test:** `### create a new invoice` → copy the returned id into `@ID=...` in `tests.http`.
Now go back and check TODO 4 (`GET /invoice?id={{ID}}` → `200`) and TODO 5 (`DELETE` → `200`, then `GET` → `404`).

### TODO 7 – `PUT /invoice/:id` – `updateInvoice`

Replace the existing invoice with the body: `200`, or `404` if the id is unknown.

**Hints**
- Combines TODO 5 (path parameter `req.params.id`) and TODO 6 (`req.body`).
- Check that the invoice exists **before** you overwrite it. A PUT on an unknown id must not create anything here.
- `Data.invoices.set(id, req.body);`

**Test:** create an invoice (TODO 6), set `@ID`, then `### update invoice` → `200` and
`### get invoice by id to check update` → amount `200`, status `paid`.

---

## Level 4 – Combine, sort, filter and page data

### TODO 8 – `GET /invoice/latest/:limit` – `getLatestInvoices`

Return `InvoiceForCustomer[]` (invoice data **plus** customer name, email and image), newest first.
`limit == 0` means return all invoices.

**Hints**
- `const limit = Number(req.params.limit);` (path parameters are always strings).
- **Step 1, join:** for each invoice in `Data.invoices`, look up `Data.customers.get(invoice.customer_id)` and create
  `new InvoiceForCustomer(invoice.id, customer.name, customer.image_url, customer.email, invoice.date, invoice.amount, invoice.status)`.
  Watch the parameter order in `src/models/InvoiceForCustomer.ts`.
- **Step 2, sort descending by date:**
  `result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());`
- **Step 3, limit:** `if (limit > 0) result = result.slice(0, limit);`

**Test:** `### get invoices (only 5)` → 5 invoices, newest first. `### get all invoices` → all of them.
You can now also copy a real invoice id from here to test TODO 4, 5 and 7.

### TODO 9 – `GET /invoice/filtered?query=<string>&currentPage=<int>` – `getFilteredInvoices`

Like TODO 8, but with a text filter and paging (`ITEMS_PER_PAGE = 6`, pages start at **1**).
`currentPage == -1` means return all matching invoices (no paging).

**Hints**
- Two query parameters:
  ```ts
  const query = (req.query.query as string).trim().toLowerCase();
  const currentPage = Number(req.query.currentPage);
  ```
- **Step 1, join and filter:** same join as TODO 8, but only keep entries where `query` is empty **or**
  `value.toString().toLowerCase().includes(query)`. `InvoiceForCustomer.toString()` concatenates name, email, date, amount and status.
- **Step 2, sort:** same as TODO 8. Sort *before* paging, otherwise the pages are random.
- **Step 3, paging:**
  ```ts
  const offset = (currentPage - 1) * InvoiceController.ITEMS_PER_PAGE;
  result = result.slice(offset, offset + InvoiceController.ITEMS_PER_PAGE);
  ```
  Only do this if `currentPage != -1`.

**Test:** `### get all invoices with filter for page 1` → only Michael Novotny's invoices.
`### get all invoices with empty filter` → the 6 newest invoices. Try `currentPage=2` and `currentPage=-1`.

---

## Done?

- Every request in `tests.http` should now return a non-`501` status.
- Run `npx tsc --noEmit` to check that your code has no type errors.
- Compare your code with `../acme-server-solution` and look at `architecture.puml` there for an overview.
