var RNG = require('../../../bot/utilities/rng');

describe('Utilities', function() {
	describe('RNG', function() {
		var seed = 1337;
		var rng;

		beforeEach(function() {
			rng = new RNG(seed);
		});

		it('should be deterministic with the same seed', function() {
			var generator1 = new RNG(seed);
			var generator2 = new RNG(seed);

			for (var i = 0; i < 100; ++i) {
				generator1.nextInt().should.equal(generator2.nextInt());
				generator1.nextInt().should.equal(generator2.nextInt());
			}
		});

		it('should be able to return psuedo-random integers', function() {
			for (var i = 0; i < 100; ++i) {
				var value = rng.nextInt();
				value.should.equal(parseInt(value));
			}
		});

		it('should be able to get a psuedo-random float value', function() {
			for (var i = 0; i < 100; ++i) {
				var value = rng.nextFloat();
				value.should.equal(parseFloat(value));
				value.should.be.within(0, 1);
			}
		});

		it('should be able to get a psuedo-random int within a range', function() {
			var min = 0;
			var max = 3;
			for (var i = 0; i < 100; ++i) {
				var value = rng.nextRange(min, max);
				value.should.equal(parseInt(value));
				value.should.be.within(min, max).and.below(max);
			}
		});

		it('should be able to get a random value from an array', function() {
			var options = ['foo', 'bar', 'baz', 'buzz'];
			for (var i = 0; i < 100; ++i) {
				var value = rng.choice(options);
				options.should.containEql(value);
			}
		});

	});
});
