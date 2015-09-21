var history = require('../../../bot/utilities/history');

describe('Utilities', function() {
	describe('history', function() {

		beforeEach(function() {
			history.reset();
		});

		it('should have a way for adding positions to it', function() {
			history.size().should.equal(0);
			history.push(1, 2).size().should.equal(1);
			history.previousPosition().should.eql([1,2]);
		});

		it('should order elements in steps back into history', function() {
			history.size().should.equal(0);
			history.push(1, 2);
			history.push(3, 4);
			history.push(5, 6);
			history.size().should.equal(3);
			history.previousPosition(1).should.eql([3, 4]);
			history.previousPosition(2).should.eql([1, 2]);
		});

		it('should have a way of being reset', function() {
			history.size().should.equal(0);
			history.push(1, 2);
			history.size().should.equal(1);
			history.reset().size().should.equal(0);
		});
	});
});
