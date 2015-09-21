/** @const */ var MAX_MODIFIER = 1.5;

module.exports = function(board, fruits)
{
	fruits.walkTypes(function(type) {
		var total       = this.totalCounts[type];
		var neededToWin = (1 + total) / 2;

		var player   = this.playerCounts[type];
		var opponent = this.opponentCounts[type];

		var playerRemaining   = Math.max(0.5, neededToWin - player);
		var opponentRemaining = Math.max(0.5, neededToWin - opponent);

		this.playerScores[type]   *= 1 + MAX_MODIFIER / playerRemaining;
		this.opponentScores[type] *= 1 + MAX_MODIFIER / opponentRemaining;
	});
};
