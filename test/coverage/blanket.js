var path   = require('path');
var srcDir = path.join(__dirname, '../..', 'bot');

require('blanket')({
	pattern: srcDir
});
