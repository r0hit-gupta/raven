var express = require('express');
var router = express.Router();

// const cars = require('../controllers/carController');
const Car = require('../models/carModel');

let NUMBER = 0;
router.get('/:number', (req, res) => {
	const {number} = req.params;
	if(number){
		NUMBER = number
	}
	res.send(`${NUMBER}`)
})

module.exports = router;
