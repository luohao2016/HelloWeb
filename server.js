"use strict";

var http = require("http");
var url = require("url");

function start(route, handle) {

	http.createServer((req, res) => {

		var pathName = url.parse(req.url).pathname;
		console.log("Request for " + pathName + " received.");
		route(handle, pathName, req, res);
	}).listen(7001);
	console.log("Server has started.");
}

exports.start = start;