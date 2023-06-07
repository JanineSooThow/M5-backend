var express = require('express')

var router = express.Router()

//the "../" refers to the parent directory of the current directory. The actual code inside 'BreedAPIController' file would contain the logic for handling requests related to dog breeds, such as retrieving breed info
var aPIDataController = require('../controllers/BreedAPIController')

//define routes to the correct controller
router.get('/breeds/:breedgroup', aPIDataController.fetchAPIData);//Going to the controller and calling this fetchAPIData

module.exports = router;


