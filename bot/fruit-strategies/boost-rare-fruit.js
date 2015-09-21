/** @const */ var MAX_MODIFIER = 1;

module.exports = function(board, fruits)
{
	var minCount = Infinity;
	var maxCount = 0;

	fruits.walkTypes(function(type) {
		var count = this.totalCounts[type];
		minCount = Math.min(minCount, count);
		maxCount = Math.max(maxCount, count);
	});

	fruits.walkTypes(function(type) {
		var modifier = 1 + MAX_MODIFIER * (minCount / this.totalCounts[type]);
		this.playerScores[type]   *= modifier;
		this.opponentScores[type] *= modifier;
	});
};
