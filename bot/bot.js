var space = require('./utilities/space');

/**
 * @constructor
 */
var Bot = function(x, y) {
	this.x      = x;
	this.y      = y;
};

Bot.prototype.distance = function(x, y) {
	return space.distance(this.x, this.y, x, y);
};

module.exports = Bot;
