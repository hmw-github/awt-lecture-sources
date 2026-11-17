# JavaScript / TypeScript Cheatsheet

This sheet lists the built-in JavaScript/TypeScript methods (language, browser and Node.js APIs) used in the lecture code examples. Each example is taken from the repo, sometimes shortened, and the **Source** column shows where it comes from.
Framework APIs (Express, React, Angular, Next.js, RxJS, Zod) and self-written methods are left out.

---

## Arrays

| Method | Example | Explanation | Source |
|---|---|---|---|
| `push(item)` | `member.borrowedBooks.push(book);` | Adds one or more items to the **end** of the array (changes the array). Returns the new length. | `02-ts/solutions/04-interfaces-library-system.ts` |
| `forEach(fn)` | `numbers.forEach((value, index) => console.log('value: ' + value + ', index: ' + index));` | Calls `fn` once for each item (value, index). Returns nothing, so it is used for side effects. | `01-client-side-techstack/js/demos/array-demo.js` |
| `map(fn)` | `member.borrowedBooks.map((b) => b.title)` | Returns a **new** array with the result of `fn` for each item. The original array stays the same. | `02-ts/solutions/04-interfaces-library-system.ts` |
| `filter(fn)` | `todos.filter((todo) => todo.status === "open")` | Returns a **new** array with only the items for which `fn` returns `true`. | `05-React/todo-list-editable-reducer/src/TodoItems.js` |
| `find(fn)` | `orders.find(order => order.id === id)` | Returns the **first** item for which `fn` returns `true`, or `undefined` if there is none. | `03-rest/order-server-solution/src/database/data.ts` |
| `findIndex(fn)` | `friends.findIndex((friend) => friend.id === friendUpdate.id)` | Like `find`, but returns the **index** of the item, or `-1`. | `06-NextJS/nextjs-friends-solution/app/services/friends-api.ts` |
| `indexOf(value)` | `member.borrowedBooks.indexOf(book)` | Returns the index of `value` (compared with `===`), or `-1`. | `02-ts/exercises/04-interfaces-library-system.ts` |
| `splice(start, deleteCount)` | `friends.splice(index, 1);` | Removes (and optionally inserts) items **in place**. Combine it with `findIndex` to delete an item. | `06-NextJS/nextjs-friends-solution/app/services/friends-api.ts` |
| `slice(start, end)` | `invoicesWithCustomer.slice(startIndex, startIndex + ITEMS_PER_PAGE)` | Returns a **copy** of a part of the array (`end` is not included). Useful for paging and limits. | `03-rest/acme-server-exercise/src/controller/InvoiceController.ts` |
| `sort(compareFn)` | `numbers.sort((n1, n2) => n2 - n1);` | Sorts **in place**. If `compareFn` returns a value < 0, `a` comes first; if > 0, `b` comes first. Without `compareFn`, the items are sorted as strings. | `01-client-side-techstack/js/demos/array-demo.js` |
| `reduce(fn, init)` | `order.products.reduce((sum, p) => sum + p.price, 0)` | Combines all items into one value (for example a sum), starting from `init`. | `02-ts/solutions/01-types-and-functions/src/index.ts` |
| `every(fn)` | `list.every(item => typeof item === 'string')` | Returns `true` if `fn` returns `true` for **all** items. | `01-client-side-techstack/js/shopping-list-server/server.js` |
| `Array.isArray(x)` | `if (!Array.isArray(list) \|\| ...)` | Checks whether a value is an array. Use it instead of `typeof`, which returns `'object'` for arrays. | `01-client-side-techstack/js/shopping-list-server/server.js` |
| `Array.from(obj, fn)` | `Array.from({ length: totalPages }, (_, i) => i + 1)` | Creates an array from an iterable or from an object with a `length` property. Here it builds the list `[1, 2, …, n]`. | `06-NextJS/nextjs-example-solution/app/lib/utils.ts` |
| Spread `...arr` | `Math.max(...revenue.map((month) => month.revenue))` | Spreads the array items into single arguments (also used for copies: `[...arr]`). | `06-NextJS/nextjs-example-solution/app/lib/utils.ts` |

## Strings

| Method | Example | Explanation | Source |
|---|---|---|---|
| `trim()` | `friendUpdate.name.trim().length == 0` | Removes whitespace at the start and end. Often used to check for empty input. | `06-NextJS/nextjs-friends-solution/app/services/friends-api.ts` |
| `toLowerCase()` | `queryParam.trim().toLowerCase()` | Returns the string in lower case. Used for searches that ignore case. | `03-rest/acme-server-solution/src/controller/InvoiceController.ts` |
| `indexOf(sub)` | `value.toString().toLowerCase().indexOf(query) != -1` | Returns the position of `sub` in the string, or `-1` if it is not there. | `03-rest/acme-server-solution/src/controller/InvoiceController.ts` |
| `includes(sub)` | `value.toString().toLowerCase().includes(query)` | Returns `true` if the string contains `sub`. It is easier to read than `indexOf(...) != -1`. | `03-rest/acme-server-exercise/src/controller/InvoiceController.ts` |
| `startsWith(prefix)` | `nextUrl.pathname.startsWith('/dashboard')` | Returns `true` if the string starts with `prefix`. | `06-NextJS/nextjs-example-solution/auth.config.ts` |
| `split(sep)` | `new Date().toISOString().split('T')[0]` | Splits the string into an array at `sep`. Here it keeps only the date part `YYYY-MM-DD`. | `06-NextJS/nextjs-example-solution/app/lib/actions.tsx` |
| `padStart(len, ch)` | `date.getDate().toString().padStart(2, '0')` | Fills the string at the start with `ch` until it has length `len` (`'9'` → `'09'`). | `02-ts/solutions/05-method-decorator.ts` |
| `localeCompare(other)` | `.sort((f1, f2) => f1.name.localeCompare(f2.name))` | Compares two strings using the rules of the current language (returns <0, 0 or >0). Use it to sort strings alphabetically. | `06-NextJS/nextjs-friends-solution/app/ui/FriendList.tsx` |
| `toString()` | `(date.getMonth() + 1).toString()` | Converts a value (number, object) to a string. Classes can override it. | `02-ts/solutions/05-method-decorator.ts` |
| Template literal | `` console.log(`invoice: ${JSON.stringify(invoice)}`); `` | A string in backticks. `${…}` inserts the value of an expression. | `06-NextJS/nextjs-example-solution/app/lib/actions.tsx` |

## Numbers & Math

| Method | Example | Explanation | Source |
|---|---|---|---|
| `Number(x)` | `new Date(Number(order.date))` | Converts a value to a number. Returns `NaN` if this is not possible. | `07-docker/react-dev/order-client/src/components/OrderList.jsx` |
| `parseInt(str)` | `amount: parseInt(p.amount)` | Reads a whole number from the start of a string (`"12abc"` → `12`). | `07-docker/react-dev/order-client/src/components/OrderForm.jsx` |
| `parseFloat(str)` | `price: parseFloat(p.price)` | Reads a decimal number from the start of a string. | `07-docker/react-dev/order-client/src/components/OrderForm.jsx` |
| `isNaN(x)` / `Number.isNaN(x)` | `!isNaN(parseInt(p.amount))` | Checks whether a value is `NaN` ("Not a Number"). The global `isNaN` converts the value first; `Number.isNaN` does not. | `07-docker/react-dev/order-client/src/components/OrderForm.jsx` |
| `toFixed(digits)` | `calculateTotal(order).toFixed(2)` | Formats a number with a fixed number of decimal places and returns a **string**. | `02-ts/solutions/01-types-and-functions/src/index.ts` |
| `toLocaleString(locale, opts)` | `(amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })` | Formats a number for a language and region, for example as currency. | `06-NextJS/nextjs-example-solution/app/lib/utils.ts` |
| `Math.random()` | `Math.trunc(Math.random() * list.length)` | Returns a random number from 0 (included) to 1 (not included). | `01-client-side-techstack/js/solutions/shopping-list.html` |
| `Math.trunc(x)` | `Math.trunc(Math.random() * list.length)` | Cuts off the decimal places (rounds towards 0). | `01-client-side-techstack/js/solutions/shopping-list.html` |
| `Math.floor(x)` | `Math.floor(Math.random() * 100)` | Rounds **down** to the next whole number. | `01-client-side-techstack/js/demos/ajax-demos/promise-demo.html` |
| `Math.ceil(x)` | `Math.ceil(invoices.length / ITEMS_PER_PAGE)` | Rounds **up**. A typical use is counting pages. | `06-NextJS/nextjs-example-solution/app/lib/data.ts` |
| `Math.max(...)` / `Math.min(...)` | `Math.max(...revenue.map((m) => m.revenue))` | Returns the largest or smallest argument. Use spread to pass an array. | `06-NextJS/nextjs-example-solution/app/lib/utils.ts` |

## Dates

| Method | Example | Explanation | Source |
|---|---|---|---|
| `new Date(x)` | `new Date(i2.date)` | Creates a date from a string or a timestamp. Without an argument, it is the current date and time. | `03-rest/acme-server-solution/src/controller/InvoiceController.ts` |
| `Date.now()` | `this.id = Date.now();` | The current time in milliseconds since 1970-01-01. Often used as a simple unique ID. | `06-NextJS/nextjs-friends-solution/app/models/Friend.ts` |
| `getTime()` | `(i1, i2) => new Date(i2.date).getTime() - new Date(i1.date).getTime()` | Returns the time in milliseconds. Subtracting two of these values sorts dates (here: newest first). | `03-rest/acme-server-solution/src/controller/InvoiceController.ts` |
| `toISOString()` | `new Date().toISOString()` | Returns the date as an ISO 8601 string in UTC: `2026-11-17T10:00:00.000Z`. | `06-NextJS/nextjs-example-solution/app/lib/actions.tsx` |
| `getFullYear()`, `getMonth()`, `getDate()`, `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()` | `(date.getMonth() + 1).toString().padStart(2, '0')` | Return single parts of the date in local time. **Watch out:** `getMonth()` counts from 0 (January = 0). | `02-ts/solutions/05-method-decorator.ts` |
| `new Intl.DateTimeFormat(locale, opts).format(d)` | `const formatter = new Intl.DateTimeFormat(locale, options); formatter.format(date);` | Formats a date for a language and region. | `06-NextJS/nextjs-example-solution/app/lib/utils.ts` |

## Objects, JSON & Collections

| Method | Example | Explanation | Source |
|---|---|---|---|
| `JSON.stringify(obj)` | `xmlhttp.send(JSON.stringify(shoppingList));` | Turns an object into a JSON string, for example to send it or to save it. | `01-client-side-techstack/js/exercises/shopping-list.html` |
| `JSON.parse(str)` | `setFriends(JSON.parse(friendsJSON));` | Turns a JSON string back into an object. | `06-NextJS/nextjs-friends-solution/app/ui/Home.tsx` |
| `Object.keys(obj)` | `Object.keys(form.controls)` | Returns an array with the names of an object's own properties. | `04-Angular/angular-demos/src/app/components/login/login.component.ts` |
| `new Map()` | `static invoices = new Map();` | A key-value store. Keys can be of any type, and the insertion order is kept. | `03-rest/acme-server-solution/src/database/Data.ts` |
| `map.set(k, v)` / `map.get(k)` | `Data.users.set(user.email, new User(...));` | Stores or reads the value for a key. `get` returns `undefined` for a missing key. | `03-rest/acme-server-solution/src/database/Data.ts` |
| `map.has(k)` / `map.delete(k)` | `Data.invoices.has(id)` / `Data.invoices.delete(id)` | Checks whether a key exists, or removes it. | `03-rest/acme-server-exercise/src/controller/InvoiceController.ts` |
| `typeof x` | `typeof item === 'string'` | Returns the basic type as a string (`'string'`, `'number'`, `'object'`, …). It is also a TS type guard. | `02-ts/solutions/02-functions/overloading-exercise.ts` |
| `x instanceof C` | `if (error instanceof AuthError)` | Checks whether an object was created from class `C` (or a subclass). | `06-NextJS/nextjs-example-solution/app/lib/actions.tsx` |

## Functions

| Method | Example | Explanation | Source |
|---|---|---|---|
| `fn.call(thisArg, ...args)` | `originalMethod.call(this, ...args)` | Calls a function with a chosen `this`. Here it is used in a decorator to call the original method. | `02-ts/solutions/05-method-decorator.ts` |
| `fn.bind(thisArg, ...args)` | `updateInvoice.bind(null, invoice.id)` | Returns a **new** function with a fixed `this` and, optionally, fixed first arguments. | `06-NextJS/nextjs-example-solution/app/ui/invoices/edit-form.tsx` |
| Arrow function | `(a, b) => a - b` | A short way to write a function. It has no `this` of its own and takes `this` from the surrounding code. | everywhere |

## Async: Promises, Timers, Fetch

| Method | Example | Explanation | Source |
|---|---|---|---|
| `fetch(url, opts)` | `const response = await fetch(backendUrl + 'revenue');` | Sends an HTTP request and returns a Promise of a `Response`. | `06-NextJS/nextjs-example-solution/app/lib/data.ts` |
| `response.ok` | `if (!response.ok) { throw new Error(...) }` | `true` if the HTTP status is from 200 to 299. `fetch` does **not** throw an error for 4xx or 5xx. | `06-NextJS/nextjs-example-solution/app/lib/data.ts` |
| `response.json()` | `const data = await response.json();` | Reads the response body and parses it as JSON (returns a Promise). | `06-NextJS/nextjs-example-solution/app/lib/data.ts` |
| `new Promise((resolve, reject) => …)` | `await new Promise((resolve) => setTimeout(resolve, 3000));` | Creates a Promise by hand. Here it is used to make the code wait for a few seconds. | `06-NextJS/nextjs-example-solution/app/lib/data.ts` |
| `promise.then(fn)` / `.catch(fn)` | `bootstrapApplication(App, appConfig).catch((err) => console.error(err));` | Registers callbacks for the success case or the error case. | `07-docker/angular-prod/order-client/src/main.ts` |
| `async` / `await` | `async function getUser(email: string): Promise<User \| undefined>` | `await` waits for a Promise. An `async` function always returns a Promise. | `06-NextJS/nextjs-example-solution/auth.ts` |
| `Promise.all([...])` | `const [invoice, customers] = await Promise.all([fetchInvoiceById(id), fetchCustomers()]);` | Runs several Promises **in parallel** and waits for all of them. It fails as soon as one of them fails. | `06-NextJS/nextjs-example-solution/app/dashboard/invoices/[id]/edit/page.tsx` |
| `Promise.resolve(v)` | `Promise.resolve({ name: "Rajesh" })` | Creates a Promise that is already resolved with `v`. | `05-React/new-in-react19/src/App.jsx` |
| `setTimeout(fn, ms)` / `clearTimeout(id)` | `clearTimeout(this.timers[key]);` | Runs `fn` once after `ms` milliseconds, or cancels that call (used for debouncing). | `04-Angular/angular-dashboard/src/app/services/debounce.service.ts` |
| `setInterval(fn, ms)` / `clearInterval(id)` | `const timer = setInterval(() => { … }, INTERVAL_DURATION_IN_SEC * 1000);` | Runs `fn` again and again every `ms` milliseconds until `clearInterval` is called. | `04-Angular/observable-demos/src/demo1.js` |
| `new XMLHttpRequest()` → `open`, `setRequestHeader`, `send`, `onreadystatechange` | `xmlhttp.open("POST", url, true); xmlhttp.setRequestHeader("content-type", "application/json"); xmlhttp.send(JSON.stringify(list));` | The older AJAX API that works with callbacks. `fetch` has replaced it. | `01-client-side-techstack/js/exercises/shopping-list.html` |

## Errors & Console

| Method | Example | Explanation | Source |
|---|---|---|---|
| `throw new Error(msg)` | `throw new Error('Failed to fetch revenue data.');` | Throws an error. It can be caught with `try { … } catch (e) { … }`. | `06-NextJS/nextjs-example-solution/app/lib/data.ts` |
| `console.log(...)` | `console.log('1st: ' + numbers[0]);` | Writes a message to the console. | everywhere |
| `console.error(...)` | `console.error('Failed to fetch user:', error);` | Writes an error message (to stderr, shown in red in the browser). | `06-NextJS/nextjs-example-solution/auth.ts` |
| `console.time(label)` / `console.timeEnd(label)` | `console.time(originalMethod.name); … console.timeEnd(originalMethod.name);` | Measures the time between the two calls and prints it. | `02-ts/solutions/05-method-decorator.ts` |

## Browser DOM

| Method | Example | Explanation | Source |
|---|---|---|---|
| `document.getElementById(id)` | `const button = document.getElementById('clickBtn');` | Returns the element with this `id`, or `null`. | `07-docker/docker-nginx-app/app.js` |
| `document.createElement(tag)` | `const p = document.createElement('p');` | Creates a new element that is not yet part of the page. | `01-client-side-techstack/js/dom-demo.html` |
| `parent.appendChild(el)` | `document.body.appendChild(p);` | Adds `el` as the last child of `parent`. | `01-client-side-techstack/js/dom-demo.html` |
| `parent.removeChild(el)` | `list.removeChild(entry);` | Removes the child `el` from `parent`. | `01-client-side-techstack/js/solutions/shopping-list.html` |
| `el.textContent` / `el.innerHTML` | `counter.textContent = `Clicks: ${clicks}`;` | Sets the text (safe) or HTML markup (be careful with user input) of an element. | `07-docker/docker-nginx-app/app.js` |
| `el.addEventListener(type, fn)` | `button.addEventListener('click', () => { … });` | Registers a handler that runs when the event happens. | `07-docker/docker-nginx-app/app.js` |
| `event.preventDefault()` | `event.preventDefault();` | Stops the browser's default action, for example sending a form and reloading the page. | `06-NextJS/nextjs-friends-solution/app/ui/DetailsForm.tsx` |
| `el.focus()` | `inputRef.current?.focus();` | Puts the keyboard focus on the element. | `05-React/article-search/src/ArticleSearch.js` |
| `el.style.setProperty(name, value)` | `root.style.setProperty('--background', 'black');` | Sets a CSS property or a CSS variable (custom property) on an element. | `01-client-side-techstack/css/demos/css-variables.html` |
| `document.writeln(str)` | `document.writeln('This is a line of text...');` | Writes text straight into the document. Only use it for demos. | `01-client-side-techstack/js/dom-demo.html` |
| `localStorage` | `localStorage.anna = JSON.stringify(annaJSON);` | Storage in the browser that stays after the page is closed. It only holds strings. | `01-client-side-techstack/js/solutions/JSON.html` |

## URLs & Forms (Web APIs)

| Method | Example | Explanation | Source |
|---|---|---|---|
| `new URLSearchParams(init)` | `const params = new URLSearchParams(searchParams);` | Lets you read and change the query string `?a=1&b=2`. | `06-NextJS/nextjs-example-solution/app/ui/search.tsx` |
| `params.set(k, v)` / `params.delete(k)` / `params.toString()` | `params.set('page', '1'); params.delete('query');` | Sets or removes parameters. `toString()` returns the query string again. | `06-NextJS/nextjs-example-solution/app/ui/search.tsx` |
| `new URL(path, base)` | `Response.redirect(new URL('/dashboard', nextUrl));` | Builds a full URL from a relative path and a base URL. | `06-NextJS/nextjs-example-solution/auth.config.ts` |
| `formData.get(name)` | `customerId: formData.get('customerId')` | Reads the value of a form field from a `FormData` object. | `06-NextJS/nextjs-example-solution/app/lib/actions.tsx` |

## Node.js

| Method | Example | Explanation | Source |
|---|---|---|---|
| `require(module)` | `const express = require('express');` | Loads a module (CommonJS). In ES modules and TypeScript, use `import` instead. | `03-rest/express-demo/server.js` |
| `fs.readFile(path, enc)` | `const data = await fs.readFile(filePath, 'utf-8');` | Reads a file and returns its content as a string (`fs/promises`). | `06-NextJS/nextjs-friends-solution/app/services/fileHandler.ts` |
| `fs.writeFile(path, data, enc)` | `await fs.writeFile(filePath, data, 'utf-8');` | Writes the data to a file and replaces what was there before. | `06-NextJS/nextjs-friends-solution/app/services/fileHandler.ts` |
