var Board    = require('./board');
var Bot      = require('./bot');
var Decider  = require('./decider');
var Fruits   = require('./fruits');
var history  = require('./utilities/history');
var Modifier = require('./modifier');
var RNG      = require('./utilities/rng');

var rng     = new RNG();

var fruitModifier = (new Modifier())
	.use(require('./fruit-strategies/min-fruit-to-win'))
	.use(require('./fruit-strategies/remove-already-won'))
	.use(require('./fruit-strategies/distance-from-fruit'))
	.use(require('./fruit-strategies/ensure-score-exists'));

var boardModifier = (new Modifier())
	.use(require('./board-strategies/fruit-decay'))
	.use(require('./board-strategies/history-decay'));

var decider = (new Decider())
	.use(require('./decision-strategies/take'))
	.use(require('./decision-strategies/best-bearing')(rng))
	.use(require('./decision-strategies/random')(rng));

var configureFruits = function(board) {
	var fruits = new Fruits(get_number_of_item_types());

	fruits.loadBoard(board);

	fruits.walkTypes(function(type) {
		var total    = get_total_item_count(type);
		var player   = get_my_item_count(type);
		var opponent = get_opponent_item_count(type);
		var board    = total - player - opponent;

		fruits.initForType(type, total, board, player, opponent);
	});

	return fruits;
};

module.exports['new_game'] = function() {
	history.reset();
};

module.exports['make_move'] = function() {
	var board    = new Board(get_board());
	var player   = new Bot(get_my_x(), get_my_y());
	var opponent = new Bot(get_opponent_x(), get_opponent_y());
	var fruits   = configureFruits(board);

	history.push(player.x, player.y);
	fruitModifier.modify(board, fruits, player, opponent);
	boardModifier.modify(board, fruits, player, opponent);
	return decider.decide(board, fruits, player);
};
