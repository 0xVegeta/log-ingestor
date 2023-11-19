const Log = require("./models/logModel.js");

async function searchLogs(keyword) {
	const regex = new RegExp(keyword, "i");

	const results = await Log.find({
		$or: [
			{ level: { $regex: regex } },
			{ message: { $regex: regex } },
			{ resourceId: { $regex: regex } },
			{ traceId: { $regex: regex } },
			{ spanId: { $regex: regex } },
			{ commit: { $regex: regex } },
			{ "metadata.parentResourceId": { $regex: regex } },
			// Add more fields as needed
		],
	}).batchSize(100);
  return results;
}

module.exports = { searchLogs };
