module.exports = function(board)
{
	var minScore = Infinity;
	var maxScore = 0;

	board.walkScore(function(score) {
		minScore = Math.min(minScore, score);
		maxScore = Math.max(maxScore, score);
		return score;
	});

	if (minScore === maxScore) minScore = 0;
	var range = maxScore - minScore;

	board.walkScore(function(score) {
		return (score - minScore) / range;
	});
};
