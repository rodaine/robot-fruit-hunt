var space = require('../utilities/space');

/** @const */ var MODIFIER = 0.75;

module.exports = function(board, fruits, player, opponent) {
	fruits.walkTypes(function(type) {
		var fruit, playerDistance, opponentDistance, delta;

		for (var i = 0; i < this.fruits[type].length; ++i) {
			fruit = this.fruits[type][i];
			playerDistance = player.distance(fruit.x, fruit.y);
			opponentDistance = opponent.distance(fruit.x, fruit.y);
			delta = playerDistance - opponentDistance;
			if (delta > 0) fruit.modifer *=  Math.pow(MODIFIER, delta);
		}
	});
};
