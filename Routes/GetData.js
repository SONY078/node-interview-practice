const express = require("express")
const datacontroller = require("../Controllers/Data")
const DataRouter = express.Router()
DataRouter.route("/content")
.get(datacontroller.api)
module.exports = DataRouter