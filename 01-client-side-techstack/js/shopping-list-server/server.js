import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// in-memory storage (lost when the server restarts)
let shoppingList = ['Milk', 'Butter', 'Fruit', 'Salad'];

// parse JSON request bodies
app.use(express.json());

// allow requests from pages served elsewhere (e.g. opened via file:// or Live Server)
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

// GET /shopping-list -> returns the current list as an array of strings
app.get('/shopping-list', (req, res) => {
    res.json(shoppingList);
});

// POST /shopping-list -> replaces the list with the array of strings in the body
app.post('/shopping-list', (req, res) => {
    const list = req.body;
    if (!Array.isArray(list) || !list.every(item => typeof item === 'string')) {
        return res.status(400).json({ error: 'Body must be a JSON array of strings' });
    }
    shoppingList = list;
    res.status(201).json(shoppingList);
});

app.listen(PORT, () => {
    console.log(`Shopping list server running at http://localhost:${PORT}/shopping-list`);
});
