/** @const */ var bearings = require('../utilities/bearings');

module.exports = function(board, fruits, player, done)
{
	var x    = player.x;
	var y    = player.y;
	var type = board.fields[player.x][player.y];
	if (type > 0) {
		if (fruits.playerScores[type] > 0) done(bearings.take);
	}
};
