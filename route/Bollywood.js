const express = require("express");
const bollyController = require("../details/Bollywood");

const bollyRouter = express.Router();

bollyRouter.route("/bollywood").get(bollyController.apiController);
module.exports = bollyRouter;
