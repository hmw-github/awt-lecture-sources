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
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})