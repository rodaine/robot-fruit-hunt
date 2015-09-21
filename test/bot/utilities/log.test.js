var log = require('../../../bot/utilities/log');

describe('Utilities', function() {
	describe('Log', function() {

		it('should implement all possible console methods', function() {
			var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
			];

			log.should.have.properties(methods);
		});

	});
});
