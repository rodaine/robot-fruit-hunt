var Fruit = require('./fruit');

/** @const */ var TYPE_INDEX    = 1;
/** @const */ var DEFAULT_SCORE = 1;

/**
 * @constructor
 */
var Fruits = function(fruitTypeCount)
{
	this.types          = fruitTypeCount;
	/** @dict */ this.totalCounts    = {};
	/** @dict */ this.boardCounts    = {};
	/** @dict */ this.playerCounts   = {};
	/** @dict */ this.opponentCounts = {};
	/** @dict */ this.playerScores   = {};
	/** @dict */ this.opponentScores = {};
	/** @dict */ this.fruits = {};

	this.walkTypes(function(type) {
		this.initForType(type, 0, 0, 0, 0);
		this.playerScores[type]   = DEFAULT_SCORE;
		this.opponentScores[type] = DEFAULT_SCORE;
		this.fruits[type] = [];
	});
};

Fruits.prototype.initForType = function(type, total, board, player, opponent)
{
	this.totalCounts[type]    = total;
	this.boardCounts[type]    = board;
	this.playerCounts[type]   = player;
	this.opponentCounts[type] = opponent;
};

Fruits.prototype.loadBoard = function(board)
{
	board.walkBoard(function(type, x, y) {
		if (0 !== type) this.fruits[type].push(new Fruit(x, y));
		return type;
	}, this);
};

Fruits.prototype.walkTypes = function(cb, context)
{
	context = context || this;
	for (var type = TYPE_INDEX; type <= this.types; ++type) {
		cb.call(context, type);
	}
};

Fruits.prototype.walkValues = function(propertyName, cb, context)
{
	context = context || this;
	this.walkTypes(function(type) {
		this[propertyName][type] = cb.call(context, type, this[propertyName][type]);
	});
};

module.exports = Fruits;
