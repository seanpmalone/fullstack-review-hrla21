const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ballplayers');

const playerSchema = new mongoose.Schema({
  firstName: 'string',
  lastName: 'string',
  number: 'string',
  position: 'string',
  height: 'string',
  weight: 'string',
  age: 'string',
  image: 'string',
  college: 'string',
  team: 'string'
});

const Player = mongoose.model('Player', playerSchema);

const saveOne = (player, callback) => {
  Player.findOne({ 'firstName': player.firstName, 'lastName': player.lastName }, 'firstName', (err, playerData) => {
  if (err) return handleError(err);
    if (playerData) {
      // Player exists already
      callback('Player exists already');
    } else {
      // Save player to database
      const newPlayer = new Player(player);
      newPlayer.save((err, savedPlayer) => {
        if (err) { console.log(err); return err; }
        console.log('Success ', savedPlayer);
        callback('Success saved one player')
      });
    }
  });
}

const getAll = (callback) => {
  Player.find({}, (err, players) => {
    if (err) return handleError(err);
    callback(players);
  });
}

// Export DB funcs
exports.saveOne = saveOne;
exports.getAll = getAll;
