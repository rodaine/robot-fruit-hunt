var decay = require('../../../bot/utilities/decay');

describe('Utilities', function() {
	describe('Decay', function() {
		it ('should decay a value relative to the rate and distance from original', function() {
			decay(100, 0, 0.5).should.equal(100);
			decay(100, 1, 0.5).should.equal(50);
			decay(100, 2, 0.5).should.equal(25);
		});
	});
});
