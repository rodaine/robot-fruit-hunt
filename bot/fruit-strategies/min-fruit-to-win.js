/** @const */ var THRESHOLD         = 0.5;
/** @const */ var PLAYER_MODIFIER   = 10;
/** @const */ var OPPONENT_MODIFIER = 5;

var getLowestTypes = function(counts) {
	var min = Infinity;
	var types = [];

	for (var type in counts) {
		min = Math.min(min, counts[type]);
	}

	for (type in counts) {
		if (counts[type] === min) {
			types.push(type);
		}
	}

	return types;
};

module.exports = function(board, fruits) {
	var playerTypesWon   = 0;
	var opponentTypesWon = 0;
	var typesTied        = 0;

	var playerFruitsRequiredToWin   = {};
	var opponentFruitsRequiredToWin = {};

	fruits.walkTypes(function(type) {
		var total    = this.totalCounts[type];
		var player   = this.playerCounts[type];
		var opponent = this.opponentCounts[type];

		if (THRESHOLD < player / total) {
			playerTypesWon++;
			return;
		} else if (THRESHOLD < opponent / total) {
			opponentTypesWon++;
			return;
		} else if (total === player + opponent) {
			typesTied++;
			return;
		}

		var neededToWin = Math.ceil(total * THRESHOLD);
		playerFruitsRequiredToWin[type]   = neededToWin - player;
		opponentFruitsRequiredToWin[type] = neededToWin - opponent;
	});

	var typesRequiredToWin     = Math.floor(0.5 * (fruits.types - typesTied) + 1);
	var playerTypesRemaining   = typesRequiredToWin - playerTypesWon;
	var opponentTypesRemaining = typesRequiredToWin - opponentTypesWon;
	var types, type, i;

	while (playerTypesRemaining > 0) {
		types = getLowestTypes(playerFruitsRequiredToWin);

		for (i = 0; i < types.length; ++i) {
			type = types[i];
			fruits.playerScores[type] *= PLAYER_MODIFIER;
			delete playerFruitsRequiredToWin[type];
		}

		if (types.length === 0) playerTypesRemaining = 0;
		playerTypesRemaining -= types.length;
	}

	while (opponentTypesRemaining > 0) {
		types = getLowestTypes(opponentFruitsRequiredToWin);

		for (i = 0; i < types.length; ++i) {
			type = types[i];
			fruits.playerScores[type] *= OPPONENT_MODIFIER;
			delete opponentFruitsRequiredToWin[type];
		}

		if (types.length === 0) opponentTypesRemaining = 0;
		opponentTypesRemaining -= types.length;
	}
};
