const db = require('../db/index');

const savePlayer = (req, res) => {
    // invoke db save function
    // pass callback to save that returns status
    db.saveOne(req.body, (data) => {
        res.status(201).send(data);
    });
};

const getAllPlayers = (req, res) => {
    // invoke db query to grab all players
    // pass callback to send back data
};

exports.savePlayer = savePlayer;
exports.getAllPlayers = getAllPlayers;