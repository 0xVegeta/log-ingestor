const express = require("express");
const logsRouter = express.Router();
const {ingestLogs, queryLogs} = require('../controllers/logs')
// const { errorWrapper } = require('../common/utility');

logsRouter.post("/", ingestLogs);
logsRouter.get('/query', queryLogs)


module.exports = logsRouter;
