const db = require('../db/index');

const getPlayers = (req, res) => {
  db.getAll((data) => {
    res.status(200).send(data)
  })
}

const savePlayer = (req, res) => {
  db.saveOne(req.body, (response) => {
    res.status(201).send(response)
  });
}

exports.savePlayer = savePlayer;
exports.getPlayers = getPlayers;
