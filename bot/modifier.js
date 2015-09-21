/**
 * @constructor
 */
var Modifier = function() {
	this.strategies = [];
};

Modifier.prototype.use = function(cb) {
	this.strategies.push(cb);
	return this;
};

Modifier.prototype.modify = function(board, fruits, player, opponent) {
	for (var index = 0; index < this.strategies.length; ++index) {
		this.strategies[index](board, fruits, player, opponent);
	}
};

module.exports = Modifier;
