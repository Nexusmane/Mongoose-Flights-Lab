var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations');


// POST Method - add arrival/time to flight
router.post('/flights/:id/destinations', destinationsCtrl.create); 


module.exports = router;