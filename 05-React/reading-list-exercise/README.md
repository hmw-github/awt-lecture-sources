# Exercise: Reading List – all React concepts in one app

In this exercise you build a small **reading list** application that combines
everything from the previous React examples:

| Concept | seen in example |
|---|---|
| `useState`, event handling | `counter` |
| props, `children`, default props, controlled forms, validation | `login-form`, `todo-list-*` |
| rendering lists with `key`, conditional rendering, editing in place | `todo-list-editable` |
| `useReducer` | `todo-list-editable-reducer` |
| `useEffect` + `fetch`, loading state, `useRef` | `article-search` |
| `memo` + `useCallback` | `callback-demo` |
| React Router: `NavLink`, nested routes, `Outlet` | `router-demo` |

New in this app: `useParams` / `useNavigate`, `useId`, `forwardRef`, effect cleanup, resetting state with `key`,
`localStorage` persistence.

## Getting started

```bash
npm install
npm start
```

The app compiles and runs from the very beginning – it just doesn't do much yet.
(The "unused variable" warnings in the terminal are expected: the imports are hints
and the warnings disappear as you complete the TODOs.)
All tasks are marked in the source code with `// TODO x.y` comments.
Work through them in the order below; after every step the app should run again.
Search for `TODO 1.` etc. in your editor to find all parts of a step.

## Application structure

```
src/
├── App.js                   routes, navigation, shared state (useReducer)
├── readingListReducer.js    reducer, initial data, localStorage helpers
├── pages/
│   ├── Home.js              statistics, recently added items
│   ├── Search.js            Hacker News search (useEffect + fetch)
│   ├── ReadingList.js       the list, filter, tabs, <Outlet />
│   ├── ItemDetails.js       nested route /list/:id
│   └── NotFound.js          404 page (complete)
└── components/
    ├── ArticleRow.js        one row of the search result (memo)
    ├── ReadingItem.js       one editable entry of the reading list
    ├── AddItemForm.js       form with validation
    └── InputWithLabel.js    reusable input with label and message
```

## Steps

1. **Reducer** (`readingListReducer.js`) – implement the actions `add`, `update`, `toggle`
   and `remove` without mutating the state.
2. **App** (`App.js`) – manage the items with `useReducer`, persist them with
   `useEffect` + `localStorage`, compute the unread count, add the navigation and the routes.
3. **Reading list** (`ReadingList.js`, `ReadingItem.js`) – filter radio buttons, render the
   list with keys, toggle / remove / edit items.
4. **Add form** (`InputWithLabel.js`, `AddItemForm.js`) – reusable input component with
   `children` and `forwardRef`, controlled form state as object, validation, focus via ref.
5. **Tabs** (`ReadingList.js`) – show either the list or the form with conditional rendering.
6. **Details** (`App.js`, `ReadingList.js`, `ItemDetails.js`) – nested route `/list/:id`,
   `useParams`, `useNavigate`, reset the note editor with `key`.
7. **Search** (`Search.js`, `ArticleRow.js`) – fetch articles from
   `https://hn.algolia.com/api/v1/search?query=...` with `useEffect`, handle loading and error
   state, avoid race conditions with a cleanup function, focus the input with `useRef`.
8. **Performance** (`ArticleRow.js`, `App.js`) – `memo` + `useCallback`. Open the browser
   console and count the `render ArticleRow` logs when you add an article.
   (In development `StrictMode` renders everything twice – that's expected.)
9. **Home** (`Home.js`) – derived statistics and the recently added items.

## Bonus ideas

- Add a "clear all read items" button (new reducer action).
- Sort the list by title or by date added.

The solution can be found in `../reading-list-solution`.
