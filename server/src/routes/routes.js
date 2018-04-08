var router = require('express').Router();
var controller = require('../controllers/controllers');

router.get('/playerslist', function(req, res) {
    console.log('something');
});
router.post('/submit-player', controller.savePlayer);

module.exports = router;