var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basketball');

var playerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    number: String,
    position: String,
    height: String,
    weight: String,
    age: String,
    image: String,
    college: String,
    team: String
});

var Player = mongoose.model('Player', playerSchema);

var newPlayer = new Player({
    "firstName":"LaMarcus",
    "lastName":"Aldridge",
    "number":"12",
    "position":"PF",
    "height":"83",
    "weight":"260",
    "age":"32",
    "image":"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200746.png",
    "college":"University of Texas at Austin",
    "team":"San Antonio Spurs"
});

newPlayer.save();