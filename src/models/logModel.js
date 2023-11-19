const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  
	level: {
		type: String,
		required: true, 
	},
	message: {
		type: String,
	},
	resourceId: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},

	traceId: {
		type: String,
		unique: true,
		required: true,
	},

	spanId: String,
	commit: String,

	metadata: {
		parentResourceId: String,
	},
});

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;
