# Shopping List Server

Minimal Express REST server for the shopping list exercise. The list is kept in memory.

## Start

```sh
npm install
npm start
```

## API

| Method | Path             | Body                       | Response                     |
|--------|------------------|----------------------------|------------------------------|
| GET    | `/shopping-list` | –                          | `200` – array of strings     |
| POST   | `/shopping-list` | JSON array of strings      | `201` – the new list         |

Invalid POST bodies are answered with `400`.

## Try it

```sh
curl http://localhost:3000/shopping-list
curl -X POST -H 'Content-Type: application/json' \
     -d '["Eggs", "Bread", "Cheese"]' http://localhost:3000/shopping-list
```

```js
// from the browser
const list = await (await fetch('http://localhost:3000/shopping-list')).json();
await fetch('http://localhost:3000/shopping-list', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([...list, 'Eggs'])
});
```
