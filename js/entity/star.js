g.add('img/ui/stars.png');

function Star(state, pos) {
	this.position = pos || new V2(0,0);
	this.state = state;
	this.width = 83;
	this.height = 79;
	this.sprite = new Sprite('img/ui/stars.png');
}

Star.prototype = new Entity();

Star.prototype.draw = function(ctx) {
	this.sprite.area(ctx, this.width * this.state, 0, this.width, this.height, this.position.x, this.position.y);
};