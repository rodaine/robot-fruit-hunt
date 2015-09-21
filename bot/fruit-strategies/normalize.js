module.exports = function(board, fruits)
{
	var playerMaxScore   = 0;
	var opponentMaxScore = 0;

	fruits.walkTypes(function(type) {
		playerMaxScore = Math.max(playerMaxScore, this.playerScores[type]);
		opponentMaxScore = Math.max(opponentMaxScore, this.opponentScores[type]);
	});

	if (0 >= playerMaxScore)     playerMaxScore = 1;
	if (0 >= opponentMaxScore) opponentMaxScore = 1;

	fruits.walkTypes(function(type) {
		this.playerScores[type]   = this.playerScores[type] / playerMaxScore;
		this.opponentScores[type] = this.opponentScores[type] / opponentMaxScore;
	});
};
