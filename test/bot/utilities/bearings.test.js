var bearings = require('../../../bot/utilities/bearings');

describe('Utilities', function() {
	describe('bearings', function() {
		it('should contain all six possible moves', function() {
			var moves = ['north', 'south', 'east', 'west', 'pass', 'take'];
			for (var i = 0; i < moves.length; ++i) {
				var move = moves[i];
				bearings.should.have.property(move);
				var bearing = bearings[move];
				bearing.should.have.properties('value', 'text', 'transform', 'isMove');
			}
		});
	});
});
