/** @const */ var bearings = require('./utilities/bearings');
/** @const */ var INITIAL_SCORE = 1;

/**
 * @constructor
 */
var Board = function(fields) {
	this.width  = fields.length;
	this.height = fields[0].length;
	this.fields = fields;
	this.scores = [];

	for (var x = 0; x < this.width; ++x) {
		var row = [];
		for (var y = 0; y < this.height; ++y) {
			row.push(INITIAL_SCORE);
		}
		this.scores.push(row);
	}
};

var _walk = function(source, width, height, cb) {
	for (var x = 0; x < width; ++x) {
		for (var y = 0; y < height; ++y) {
			source[x][y] = cb(source[x][y], x, y);
		}
	}
	return source;
};

Board.prototype.walkBoard = function(cb, context) {
	context = context || this;
	this.fields = _walk(this.fields, this.width, this.height, cb.bind(context));
};

Board.prototype.walkScore = function(cb, context) {
	context = context || this;
	this.scores = _walk(this.scores, this.width, this.height, cb.bind(context));
};

Board.prototype.getBestAdjacentBearings = function(x, y) {
	var bestScore    = 0;
	var bestBearings = [];

	for (var key in bearings) {
		var bearing = bearings[key];
		if (!bearing.isMove) continue;

		var newX = x + bearing.transform[0];
		var newY = y + bearing.transform[1];

		if (!this.isValidPosition(newX, newY)) continue;

		var score = this.scores[newX][newY];

		if (score > bestScore) {
			bestScore    = score;
			bestBearings = [bearing];
		} else if (score === bestScore) {
			bestBearings.push(bearing);
		}
	}

	return bestBearings;
};

Board.prototype.isValidPosition = function(x, y) {
	return x >= 0 &&
		x < this.width &&
		y >= 0 &&
		y < this.height;
};

module.exports = Board;
