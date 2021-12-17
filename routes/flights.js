var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


// GET "/flights" - Index Route - Will help show the Index page 
router.get('/', flightsCtrl.index);

// GET "/flights/new" - Create NEW route
router.get('/new', flightsCtrl.new);

// POST "/flights" - Create route for new flight
router.post('/', flightsCtrl.create);

// GET "/flights/:id" - Show route for the "Details"  button 
router.get('/:id', flightsCtrl.show);




module.exports = router;

