const express = require('express')
const app = express()
const port = 3000

function myLogger(req, res, next) {
  console.log(`> starting call ${req.method} ${req.originalUrl}`);
  next();
  console.log('< finished call');
}

app.use(myLogger);

app.get('/hello', (req, res) => {
  res.send('Hello World!');
})

app.get('/greet', (req, res) => {
    const name = req.query.name;

    if (name) {
        res.status(200).send(`Hi ${name}`);
    } else {
        res.status(400).send('Supply a name!');
    }
});

app.get('/greet2', (req, res) => {
    const name = req.params.name;

    if (name) {
        res.status(200).send(`Hi ${name}`);
    } else {
        res.status(400).send('Supply a name!');
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})