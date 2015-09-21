var space = require('../../../bot/utilities/space');

describe('Utilities', function() {
	describe('Space', function() {

		it('should be able to calculate the distance between two points', function() {
			space.distance(1, 1, 1, 1).should.be.exactly(0);
			space.distance(0, 0, 0, 1).should.be.exactly(1);
			space.distance(0, 0, 1, 1).should.be.exactly(2);
			space.distance(-1, 1, 1, -1).should.be.exactly(4);
		});

	});
});
