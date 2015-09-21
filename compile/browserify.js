var browserify = require('browserify');
var fs         = require('fs');
var path       = require('path');

var entryModule = path.resolve(__dirname, '../bot/game');
var writeFile   = path.resolve(__dirname, '../bot.js');

var b = browserify();
b.require(entryModule, { expose: 'game' });

b.bundle({}, function(err, data) {
	if (err) {
		console.log(err);
		return;
	}

	fs.writeFileSync(writeFile, data);
});
