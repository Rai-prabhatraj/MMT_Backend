const express = require("express");
const { CreateNewCityConytoller, GetAllCityController , UpdateACityController} = require("./../controller/City.controller")
const {AdminAuthorizationMiddleware} = require("./../middlewares/Authorization.middleware")

const CityRouter = express.Router();

CityRouter.post("/add", AdminAuthorizationMiddleware, CreateNewCityConytoller)

CityRouter.get("/all", GetAllCityController)

CityRouter.put("/update", AdminAuthorizationMiddleware, UpdateACityController)
                                         
module.exports = CityRouter;