# Exercise: Todo List with Angular Signals

In this exercise you manage the state of a small todo list with **Angular Signals**.
Compare it with `../todolist-no-signals`, which solves the same problem without signals.

| Concept | API |
|---|---|
| writable signal: create, read | `signal()`, `todos()` |
| update a signal immutably | `todos.update(...)` |
| derived state | `computed()` |
| side effects | `effect()` |
| share state between components | pass a `WritableSignal` as `@Input()` |

## Getting started

```bash
npm install
npm start
```

Open `http://localhost:4200/`. The app compiles and runs from the very beginning, but it doesn't do much yet:
the list is empty and the buttons have no effect.
All tasks are marked in the source code with `// TODO x.y` comments.
Work through them in the order below. After every step the app should run again.

## Application structure

```
src/app/
├── app.ts / app.html          root component, owns the signal "todos"
├── model/Todo.ts              the Todo class (complete)
└── components/
    ├── add-todo/              input field + "add" button
    └── todo-list/             list of open todos + "close" button
```

## Steps

1. **Create the signal** (`app.ts`): initialize the writable signal `todos` with the initial todos.
   The list stays empty until step 2 is done.
2. **Computed signal** (`todo-list.ts`): `openTodos` should contain only the todos with status `'open'`.
   The three initial todos should now be visible.
3. **Add a todo** (`add-todo.ts`): add the new todo to the signal with `update()`.
4. **Close a todo** (`todo-list.ts`): set the status of a todo to `'closed'` with `update()`.
   The todo should disappear from the list. When all todos are closed, the message
   "You got no todos - enjoy your day!" appears.
5. **Effect** (`todo-list.ts`): log the todos to the browser console whenever they change.
   Open the developer tools and check that a log entry appears after every add and close.

Answer the questions in the TODO comments as you go.

## Bonus ideas

- Show the number of open todos in the heading ("Current Todos (2)") with a `computed()` signal in `App`.
- Add a "delete all closed todos" button.
- Turn `description` in `AddTodo` into a signal and disable the "add" button while it is empty
  (hint: `computed()` + `[disabled]`).
- Also show the closed todos in a second list below the open ones.

The solution can be found in `../todolist-signals-solution`.
