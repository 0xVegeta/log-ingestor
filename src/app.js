const dotenv = require("dotenv");
dotenv.config({ path: `.env` });
const cors = require("cors");
const { connectDB } = require("./config/db");
// const { notFound, errorHandler } = require("./middlewares/error.js");

connectDB();
const express = require("express");
const expressApp = express();
expressApp.use(cors());
const bodyParser = require("body-parser");


const logsRouter = require("./routes/logs");

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());
expressApp.use("/", logsRouter);


module.exports = {
	app: expressApp,
};
