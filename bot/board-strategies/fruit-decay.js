var space = require('../utilities/space');
var decay = require('../utilities/decay');

/** @const */ var MODIFIER   = 1;
/** @const */ var DECAY_RATE = 0.75;

module.exports = function(board, fruits)
{
	board.walkScore(function(score, x, y) {
		fruits.walkTypes(function(type) {
			var count     = this.boardCounts[type];
			var typeScore = this.playerScores[type];
			for (var i = 0; i < count; ++ i) {
				var fruit = this.fruits[type][i];
				var distance = space.distance(fruit.x, fruit.y, x, y);
				score += MODIFIER * decay(typeScore * fruit.modifier, distance, DECAY_RATE);
			}
		});

		return score;
	});
};
