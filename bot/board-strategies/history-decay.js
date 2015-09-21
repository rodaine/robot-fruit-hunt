/** @const */ var history = require('../utilities/history');
var decay   = require('../utilities/decay');

/** @const */ var MAX_STEPS  = 1;
/** @const */ var MODIFIER   = 0.95;
/** @const */ var DECAY_RATE = 0.5;

module.exports = function(board)
{
	var pos;
	for (var i = 1; i < history.size() && i <= MAX_STEPS; ++i) {
		pos = history.previousPosition(i);
		board.scores[pos[0]][pos[1]] *= decay(MODIFIER, i - 1, DECAY_RATE);
	}
};
