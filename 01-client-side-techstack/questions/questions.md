# Chapter 1: Client-side Technology Stack – Review Questions

These questions review the main ideas of the chapter. Try to answer each block on your own before opening the answers.

---

## 1. Introduction: Web Application Architectures

1. What does "HTML5" consist of, and which role does the web browser play in a web application?
2. Describe the classic 3/4-tier architecture (web client, web server, [application server], database). What is the responsibility of the web server and of the application server?
3. When is the classic server-side page generation approach a good choice, and what are its drawbacks?
4. How does a Single Page Application (SPA) work? Name its main advantages compared to server-side page generation.

<details>
<summary>Answers</summary>

1. HTML5 = HTML + CSS + JavaScript. A web application is always a client/server system; the browser is the client and contains interpreters for HTML5. It is the "thinnest" client because no application has to be installed.
2. The browser sends an HTTP request to the web server, which uses a database or an application server to generate an HTML reply.
   - **Web server:** serves static content (HTML, CSS, JS), may serve dynamic content or delegate it to the application server, but provides no business logic and no database access.
   - **Application server:** serves dynamic content, implements business logic, accesses the database and offers application-level services (transactions, authorization, load balancing, caching, …).
3. It suits apps with many users whose UI requirements can be realized in a browser. Drawbacks: limited look & feel / UX of browser apps, and page reloads caused by server-side page generation limit interactivity.
4. On the first request the browser loads the entire application code; afterwards it only exchanges data (JSON) with a REST server. Advantages: scales well to many users, reduces server load because there are fewer server calls and no page generation on the server, and there are no full page reloads.

</details>

---

## 2. HTML

1. What is HTML, and what is a tag (markup)?
2. Describe the general syntax of a tag (opening/closing tag, attributes, comments).
3. What is the basic structure of an HTML document? What is the purpose of `<!DOCTYPE html>`, `<head>` and `<body>`?
4. Which kinds of information typically go into the `<head>` section?
5. Which groups of tags do you need for typical page content and for forms in web applications?

<details>
<summary>Answers</summary>

1. HTML (Hypertext Markup Language) is a language for describing hypermedia documents in the WWW. A tag is a control element for formatting and placing content (text, images, video, audio, …) within such a document.
2. `<tag attr1="value1" attr2="value2"> … </tag>` – a tag usually has a closing tag (some don't, e.g. `<input>`, `<br />`), may have attributes, and may contain text and other tags. Comments are written as `<!-- … -->`.
3. `<!DOCTYPE html>` selects the grammar used to parse the document (HTML5). `<html>` is the root of the document tree with two children: `<head>` (meta information) and `<body>` (the visible content).
4. Character set (`meta charset`), viewport setting for responsive pages, title, description for crawlers, links to CSS stylesheets, JavaScript files, and caching information (e.g. `expires`).
5. - **Content:** headings (`h1`–`h6`), paragraphs (`p`), lists (`ul`/`ol`/`li`), links (`a`), tables, images (`img`), containers (`div` = block, `span` = inline), `hr`.
   - **Forms:** `form`, `fieldset`/`legend`, `label`, `input` (text, checkbox, radio, …), `textarea`, `select`/`option`, `button`.

</details>

---

## 3. CSS

1. What is CSS used for, and what does a CSS rule consist of?
2. Which kinds of selectors do you know? Explain the difference between an element, ID and class selector.
3. What is the difference between pseudo-classes and pseudo-elements?
4. Explain the difference between `border`, `margin` and `padding`.
5. What is a box model? Compare `content-box` and `border-box`.
6. What does the `display` property control? Explain `none`, `inline` and `block`, and how `display: none` differs from `visibility: hidden`.
7. Which techniques help to build responsive web pages?

<details>
<summary>Answers</summary>

1. CSS (Cascading Style Sheets) controls the appearance of HTML elements: colors, fonts, spacing, layout. A rule consists of one or more selectors and a declaration block with `property: value;` pairs. The selectors determine which elements the declarations apply to.
2. Element selectors (`p`), ID selectors (`#top-secret`), class selectors (`.important`, optionally restricted to a tag, e.g. `div.yellow`), attribute selectors, context selectors/combinators (descendant, child, sibling), pseudo-classes and pseudo-elements. An element selector matches all elements of a tag, an ID selector matches the single element with that id, and a class selector matches all elements that have the class.
3. Pseudo-classes target a **state** of an element (e.g. `:hover`, `:focus`, `:visited`); pseudo-elements target a **part** of an element's content (e.g. `::first-letter`, `::before`, `::after`).
4. `border` is the frame around an element (width, line style, color). `margin` is the distance between the element and other elements (outside the border). `padding` is the distance between the border and the content (inside the border).
5. A box model determines how the final size of an element is calculated (`box-sizing`). With `content-box` (default) the width is content width + padding + border. With `border-box` the specified width is the total width.
6. `display` determines whether and how an element is displayed. `none` hides the element and removes it from the layout; `visibility: hidden` hides it but keeps its space. `inline` behaves like `span` (width/height cannot be set); `block` behaves like `p`.
7. A grid (typically 12 columns) with defined wrap points, media queries that redefine rules for small screens, hiding/showing components depending on screen width (e.g. a burger menu, or cards instead of a table on small screens), and the viewport meta tag. Flexbox and CSS frameworks such as Bootstrap or Tailwind help as well.

</details>

---

## 4. JavaScript Basics

1. How are variables declared in JavaScript, and what kind of typing does JS use?
2. Why should you use `===` instead of `==` for comparisons?
3. What is the difference between the `for-in` and the `for-of` loop?
4. Which typical array operations does JS offer, and what are arrow functions used for in that context?
5. What is a JavaScript object? How do classes and inheritance work in JS, and what are their limitations compared to Java?
6. How does error handling work in JavaScript?

<details>
<summary>Answers</summary>

1. With `var`, `let` (block-scoped) and `const` (cannot be reassigned). JS is dynamically typed: the type belongs to the value and can be checked with `typeof` (e.g. number, boolean, string, object).
2. JS tries to convert operands of different types to match them, and `==` can produce surprising results because of this. `===` compares without type conversion (value **and** type).
3. `for-in` iterates over the **keys** (property names) of an object. `for-of` iterates over the **elements** of an iterable such as an array.
4. Index access, `push`, `length`, `sort`, `forEach`, `filter` (and similar functions such as `map`). Arrow functions (`n => n > 0`) are passed as short callbacks, e.g. as comparators or filter predicates.
5. An object is a set of properties (data) and functions. It can be created with object literal notation or with classes. JS classes support only single inheritance and have no real access modifiers (`public`/`private`/`protected`); since ES2022 private fields can be written with `#`.
6. With `try`/`catch` (and `throw`), similar to Java. You can throw `Error` objects (or subclasses), but often a simple value such as a string is thrown.

</details>

---

## 5. JSON

1. What is JSON, and why is it so popular for data transfer?
2. How do you convert between JS objects and JSON strings?
3. What are the differences between JSON and JavaScript objects?

<details>
<summary>Answers</summary>

1. JSON (JavaScript Object Notation) is a text format for structured data. It is readable and easy to process, especially in JavaScript, so it is widely used for transferring data over the Internet (e.g. in REST APIs).
2. `JSON.stringify(obj)` converts an object into a JSON string; `JSON.parse(text)` converts a JSON string back into an object (e.g. to store data in or load it from `localStorage`).
3. JSON cannot contain functions. Its values can only be strings, numbers, arrays, `true`, `false`, `null` or nested JSON objects. Property keys must be quoted with double quotes. JS objects can contain values of any type, including functions.

</details>

---

## 6. JS DOM API

1. What is the DOM, and what can you do with the JS DOM API?
2. How can HTML elements be found with the DOM API?
3. How can the document tree be changed at runtime?

<details>
<summary>Answers</summary>

1. The Document Object Model is the browser's tree representation of the HTML document. With the DOM API you can find elements, traverse the tree, change elements and their attributes and CSS, and handle events caused by user interaction.
2. By id, name, tag name, class name, or CSS selector (e.g. `getElementById`, `getElementsByClassName`, `querySelector`/`querySelectorAll`), or by traversing the tree from the predefined `document` variable using `children`, `nextSibling`, `previousSibling` and similar properties.
3. By creating and appending or inserting nodes, removing nodes, setting node attributes and content (e.g. `innerHTML`), and changing CSS properties of elements.

</details>

---

## 7. Loading Data Asynchronously

1. Why is the classic request/response model (a new page for every interaction) unsuitable for interactive applications?
2. Describe the AJAX approach and its benefits.
3. What is a Promise, and how do you use it (`then`, `catch`, `resolve`, `reject`)?
4. How does the Fetch API relate to Promises, and what are the typical steps when loading JSON data with `fetch`?

<details>
<summary>Answers</summary>

1. Every significant interaction (form submit, navigation) causes a server round trip and a full page reload. The resulting delay impairs the user experience.
2. 1) The browser sends an asynchronous request to an HTTP server. 2) The server answers with XML or JSON. 3) The result is written into the DOM and displayed at once. Benefits: no page reload, and data appears (or seems to be saved) almost immediately. In JS, AJAX is implemented with `XMLHttpRequest` and a handler function that runs when the request state changes.
3. A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It is a placeholder for a value that will be available later. The promise function calls `resolve(value)` on success or `reject(error)` on failure. Handlers are registered with `.then(...)` (which can be chained, each step receiving the previous step's return value) and `.catch(...)`, which handles rejections and errors thrown in any earlier `then`.
4. `fetch(url)` sends an HTTP request and returns a Promise. Typical steps: 1) check `response.ok` and convert the body with `response.json()` (otherwise throw an error), 2) process the data and write it into the DOM, 3) handle errors in `catch`. As an alternative to `then` chains, `async`/`await` can be used for shorter code.

</details>
