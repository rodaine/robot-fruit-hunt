module.exports = function(board, fruits)
{
	var playerMaxScore   = 0;
	var opponentMaxScore = 0;

	fruits.walkTypes(function(type) {
		playerMaxScore   = Math.max(playerMaxScore, this.playerScores[type]);
		opponentMaxScore = Math.max(opponentMaxScore, this.opponentScores[type]);
	});

	if (playerMaxScore === 0)   fruits.walkValues('playerScores', function(type) { return 1; });
	if (opponentMaxScore === 0) fruits.walkValues('opponentScores', function(type) { return 1; });
};
