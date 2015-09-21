module.exports = function(rng)
{
	return function(board, fruits, player, done) {
		var bestBearings = board.getBestAdjacentBearings(player.x, player.y);
		if (bestBearings.length >= 1) done(rng.choice(bestBearings));
	};
};
