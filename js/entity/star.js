g.add('img/ui/stars.png');

function Star(star, pos) {
	this.position = pos || new V2(0,0);
	this.star = star;
	this.width = 83;
	this.height = 79;
	this.sprite = new Sprite('img/ui/stars.png');
}

Star.prototype = new Entity();

Star.prototype.draw = function(ctx) {
	this.sprite.area(ctx, this.width * this.star, 0, this.width, this.height, this.position.x, this.position.y);
};