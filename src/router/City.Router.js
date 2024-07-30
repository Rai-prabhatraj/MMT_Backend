const express = require("express");
const { CreateNewCityConytoller } = require("./../controller/City.controller")

const CityRouter = express.Router();

CityRouter.post("/add", CreateNewCityConytoller)
                                         
module.exports = CityRouter;