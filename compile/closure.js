var cc   = require('closure-compiler');
var fs   = require('fs');
var path = require('path');

var readFile    = path.resolve(__dirname, '../bot.js');
var writeFile   = path.resolve(__dirname, '../bot.min.js');

var options = {
	compilation_level: 'ADVANCED_OPTIMIZATIONS'
};

cc.compile(fs.readFileSync(readFile), options, function(err, stdout, stderr) {
	if (err) {
		console.log(err);
		console.log(stderr);
		return;
	}

	stdout += "var game = require('game'); new_game = game.new_game; make_move = game.make_move;";

	fs.writeFileSync(writeFile, stdout);
});
