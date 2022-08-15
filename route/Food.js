const express = require('express')
const foodController = require('../details/Food')

const foodRouter = express.Router()
foodRouter.route("/food")
.get(foodController.apiController)
module.exports = foodRouter