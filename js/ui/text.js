function Text(text, position, font, color, align) {
	this.text = text;
	this.position = position;
	this.align = align || 'center';
	this.color = color || 'black';
	this.font = font || '50px sans-serif';
}

Text.prototype = new Entity();

Text.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.font = this.font;
	ctx.textAlign = this.align;
	ctx.fillText(this.text, this.position.x, this.position.y, this.getArea().width());
};
