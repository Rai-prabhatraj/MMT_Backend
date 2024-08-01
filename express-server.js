const express = require("express")
require('dotenv').config()
require('./src/db/connect')

const CityRouter = require("./src/router/City.Router");
const UserRouter = require("./src/router/User.router");
const AdventureRouter = require("./src/router/Adventure.Router");

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

const server = express()

server.use(express.json())

server.use("/cities", CityRouter);
server.use("/users", UserRouter);
server.use("/adventures",AdventureRouter);

server.listen(PORT, ()=>{
    console.log(`Server started successfully in ${NODE_ENV} at PORT - ${PORT}`)
})