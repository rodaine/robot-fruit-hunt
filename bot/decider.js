/** @const */ var bearings = require('./utilities/bearings');

/**
 * @constructor
 */
var Decider = function() {
	this.strategies = [];
};

Decider.prototype.use = function(cb) {
	this.strategies.push(cb);
	return this;
};

Decider.prototype.decide = function(board, fruits, player, defaultDecision) {
	var index    = 0;
	var decision = defaultDecision || bearings.pass;
	var decided  = false;

	var done = function(value) {
		decision = value;
		decided  = true;
	};

	while (!decided && this.strategies[index]) {
		this.strategies[index](board, fruits, player, done);
		++index;
	}

	return decision.value || decision;
};


module.exports = Decider;
