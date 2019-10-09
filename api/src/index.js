// Imports
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const config = require("../config");

// Define const
const PORT = config.port;
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use("/api", require("./routers"));

app.get("*", function(req, res) {
	res.send("Api is working");
});

// Listen
app.listen(PORT, () => {
	console.log(`Api listening at http://localhost:${PORT}/`);
});

module.exports = app;