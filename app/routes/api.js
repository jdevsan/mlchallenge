const express = require('express');
const router = express.Router();

const mutantController = require('../controllers/mutantController');

router.post('/mutant', mutantController.isMutant);
router.get('/stats', mutantController.stats);
//router.get('/verified', mutantController.verifiedDna);


module.exports =  router;