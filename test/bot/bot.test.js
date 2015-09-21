var Bot = require('../../bot/bot');

describe('Bot', function() {
	var bot;
	var x = 1;
	var y = 2;

	beforeEach(function() {
		bot = new Bot(x, y);
	});

	it('should store its position', function() {
		bot.x.should.equal(x);
		bot.y.should.equal(y);
	});

	it('should be able to tell you the distance from that player', function() {
		bot.distance(x, y).should.equal(0);
		bot.distance(0, 0).should.equal(3);
	});
});
