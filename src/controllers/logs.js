const Log = require('../models/logModel');
const { searchLogs } = require('../utility');

const ingestLogs = async (req, res) => {
  try {
    const logData = req.body;
    if (Array.isArray(logData)) {
      const existingLogs = await Log.find({
				traceId: { $in: logData.map((log) => log.traceId) },
			}).batchSize(100);
			if (existingLogs.length > 0) {
				return res
					.status(400)
					.json({ error: "Duplicate logs. TraceIds already exist." });
			}

			const bulkOps = logData.map((log) => ({
				insertOne: {
					document: log,
				},
			}));

			const logs = await Log.collection.bulkWrite(bulkOps, { ordered: false });
			res.status(201).json({ message: "Logs ingested successfully", logdata: logs });
      
    } else {
      const existingLog = await Log.findOne({ traceId: logData.traceId });
			if (existingLog) {
				return res
					.status(400)
					.json({ error: "Duplicate log. TraceId already exists." });
			}

			const log = new Log(logData);
			await log.save();
			return res.status(200).json({message:"Log ingested successfully", logData:log})
    }

		
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
  
}

const queryLogs = async (req, res) => {
	try {
		if (req.query.fullTextSearch) {
			const searchresults = await searchLogs(req.query.fullTextSearch);
			return res.status(200).json(searchresults)
		}
		const queryFilters = {};
		const filters = [ "level","message","resourceId","timestamp","traceId","spanId","commit","metadata.parentResourceId",];

		filters.forEach((filter) => {
			if (req.query[filter]) {
				queryFilters[filter] =
					filter === "timestamp"
						? { $eq: new Date(req.query[filter]) }
						: req.query[filter];
			}
		});

		if (req.query.startTime && req.query.endTime) {
      queryFilters["timestamp"] = {
				$gte: new Date(req.query.startTime),
				$lte: new Date(req.query.endTime),
			};
    }
		const result = await Log.find(queryFilters).batchSize(100);
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = {ingestLogs, queryLogs}