/** @const */ var bearings = require('../utilities/bearings');
/** @const */ var keys = Object.keys(bearings);

module.exports = function(rng)
{
	return function(board, fruits, player, done) {
		var decision = bearings[keys[keys.length * rng.nextFloat() << 0]];
		if (decision.isMove) done(decision);
	};
};
