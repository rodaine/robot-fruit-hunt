var noop = require('../../../bot/utilities/noop');

describe('Utilities', function() {
	describe('noop', function() {
		it('should be an empty function', function() {
			noop.should.be.an.instanceOf(Function);
		});
	});
});
