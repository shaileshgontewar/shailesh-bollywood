const express = require("express");
const fitController = require("../details/Fintess");

const fitRouter = express.Router();
fitRouter.route("/fitness").get(fitController.apiController);
module.exports = fitRouter;
