const express = require('express')
const app = express()
const port = 3000

function myLogger(req, res, next) {
  console.log(`> starting call ${req.method} ${req.originalUrl}`);
  next();
  console.log('< finished call');
}

app.use(myLogger); // install "middleware"

app.get('/', (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.status(200).send('Hello World!')
})

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}!`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
