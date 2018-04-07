const router = require('express').Router();
const controller = require('../controllers/controller');

router.get('/players', controller.getPlayers);
router.post('/submit-player', controller.savePlayer);

module.exports = router;
