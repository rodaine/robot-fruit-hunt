/** @const */ var THRESHOLD = 0.5;
/** @const */ var MODIFIER  = 0;

module.exports = function(board, fruits)
{
	fruits.walkTypes(function(type) {
		var total    = this.totalCounts[type];
		var player   = this.playerCounts[type];
		var opponent = this.opponentCounts[type];

		var won =
			THRESHOLD < player / total ||
			THRESHOLD < opponent / total ||
			total === player + opponent;

		if (won) {
			this.playerScores[type]   *= MODIFIER;
			this.opponentScores[type] *= MODIFIER;
		}

	});
};
