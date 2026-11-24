# Solution: Reading List – all React concepts in one app

Sample solution for `../reading-list-exercise` (see the README there for the task description).

```bash
npm install
npm start
```

## Where to find which concept

| Concept | File |
|---|---|
| `useState`, event handlers, controlled inputs | `pages/Search.js`, `components/ReadingItem.js` |
| props, `children`, default props, `useId` | `components/InputWithLabel.js` |
| controlled form with object state, validation | `components/AddItemForm.js` |
| lists with `key`, conditional rendering (tabs), filtering (derived state) | `pages/ReadingList.js`, `pages/Home.js` |
| `useReducer` with lazy initializer, immutable updates | `readingListReducer.js`, `App.js` |
| `useEffect` to sync with localStorage | `App.js` |
| `useEffect` + `fetch`, loading / error state, cleanup against race conditions | `pages/Search.js` |
| `useRef` for focus, ref passed to a child component with `forwardRef` | `pages/Search.js`, `components/AddItemForm.js` |
| `memo` + `useCallback` | `components/ArticleRow.js`, `App.js` |
| lifting state up | `App.js` (state shared by Search, ReadingList, Home) |
| React Router: `NavLink`, `Link`, nested routes, `Outlet`, `useParams`, `useNavigate`, 404 route | `App.js`, `pages/ReadingList.js`, `pages/ItemDetails.js` |
| resetting state with `key` | `pages/ItemDetails.js` |
