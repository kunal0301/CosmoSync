const express = require('express');
const router = express.Router();
const {getPlanet, getSinglePlanet} = require('../controllers/planet.controller');


router.get('/', getPlanet);
router.get('/:id', getSinglePlanet);


module.exports = router;