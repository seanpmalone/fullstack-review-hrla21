const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;
const logMethodUrl = function (req, res, next) {
  if (req.url !== `/favicon.ico`) {
    const date = new Date(Date.now());
    console.log(`Time: ${date.toLocaleTimeString("en-US")} - Serving request ${req.method} at ${req.url}`);
  }
  next()
}

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logMethodUrl);


// Route Handling
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/*', (req, res) => res.status(404).send('This page does not exist.'));

// Set Port to Listen
app.listen(PORT, () => console.log(`Fullstack app listening on ${PORT}`))
