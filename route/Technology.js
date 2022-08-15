const express = require("express");
const techController = require("../details/Technology");

const techRouter = express.Router();
techRouter.route("/technology").get(techController.apiController);
module.exports = techRouter;
