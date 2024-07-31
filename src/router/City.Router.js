const express = require("express");
const { CreateNewCityConytoller, GetallcityController, UpdatecityContoller, DeletecityController} = require("./../controller/City.controller");


const CityRouter = express.Router();

CityRouter.post("/add", CreateNewCityConytoller)
CityRouter.get("/all",GetallcityController)
CityRouter.put("/update",UpdatecityContoller)
CityRouter.delete("/delete",DeletecityController)
                                         
module.exports = CityRouter;