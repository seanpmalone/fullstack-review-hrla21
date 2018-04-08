//npm install
//create rest-server in scripts in package.json
//npm run rest-server
var express = require('express');
//npm install express
var app = express();
//npm install body-parser
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./routes/routes');


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../../client')));

app.use('/api', routes);

// app.get('/', function (req, res) {
//     res.send('Hello World');
//   })

app.use('*', function(req, res) {
    res.status(404).send('Page does not exist! SORRY!');
});
   
app.listen(3000, function() {
    console.log('We\'re live on port 3000!');
})

//1. Create the server and routes
//2. Create the database