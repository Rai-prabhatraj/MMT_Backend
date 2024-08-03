const express = require("express")

const { CreateNewUserController, SigninUserController,  } = require("./../controller/User.controller")

const AuthenticationRouter = express.Router()

AuthenticationRouter.post("/signup", CreateNewUserController)

AuthenticationRouter.post("/signin", SigninUserController)

module.exports = AuthenticationRouter