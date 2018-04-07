const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/routes');

const app = express();
const PORT = 8080;

// This is an example of a custom middleware to log time and request in server
const logMethodUrl = function (req, res, next) {
  if (req.url !== `/favicon.ico`) {
    const date = new Date(Date.now());
    console.log(`Time: ${date.toLocaleTimeString("en-US")} - Serving request ${req.method} at ${req.url}`);
  }
  next()
}

// Express app uses middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logMethodUrl);

// Serve static files
app.use(express.static(path.join(__dirname, '../../client/index.html')));

// Route Handling
app.use('/api', routes);
app.get('/*', (req, res) => res.status(404).send('This page does not exist.'));

// Set Port to Listen
app.listen(PORT, () => console.log(`Fullstack app listening on ${PORT}`))
