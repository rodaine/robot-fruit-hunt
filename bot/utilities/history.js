var History = function()
{
	this.stack = [];
};

History.prototype.previousPosition = function(i) {
	i = i || 0;
	return (i >= this.size() || i < 0) ? undefined : this.stack[i];
};

History.prototype.size = function() {
	return this.stack.length;
};

History.prototype.push = function(x, y)
{
	this.stack.unshift([x, y]);
	return this;
};

History.prototype.reset = function()
{
	this.stack = [];
	return this;
};

module.exports = new History();
