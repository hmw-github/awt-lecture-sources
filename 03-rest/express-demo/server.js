const express = require('express')
const app = express()
const port = 3000

/**
 * Middleware intercepting calls: provide log output
 * @param {*} req request data
 * @param {*} res response data
 * @param {*} next next handler in the handler chain
 */
function myLogger(req, res, next) {
  console.log(`> starting call ${req.method} ${req.originalUrl}`);
  next();
  console.log('< finished call');
}

app.use(myLogger);

/**
 * Endpoint definitions
 */
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

app.get('/greet2/:name', (req, res) => {
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