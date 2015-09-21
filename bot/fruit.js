/** @const */ var DEFAULT_MODIFIER = 1;

/**
 * @constructor
 */
var Fruit = function(x, y, modifier) {
	this.x = x;
	this.y = y;
	this.modifier = modifier || DEFAULT_MODIFIER;
};

module.exports = Fruit;
