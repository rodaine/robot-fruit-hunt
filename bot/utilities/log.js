/** @const */
var methods = [
	'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	'timeStamp', 'trace', 'warn'
];

var noop    = require('./noop');
var console = (global.console = global.console || console || {});

for (var i = methods.length - 1; i >= 0; i--) {
	var method = methods[i];
	if (!console[method]) console[method] = noop;
}

module.exports = console;
