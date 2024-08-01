const express = require("express")

const { CreateNewAdventureDetailController } = require("./../controller/AdvDetails.controller")

const AdventureDetailRouter = express.Router();

AdventureDetailRouter.post("/add", CreateNewAdventureDetailController)

module.exports = AdventureDetailRouter