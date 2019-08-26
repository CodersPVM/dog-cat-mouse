function Mouse() {
	this.mouse = mouse;
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
}

module.exports = Mouse;