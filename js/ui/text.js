function Text(text, x, y, font, color, align) {
	this.text = text;
	this.x = x;
	this.y = y;
	this.align = align || 'center';
	this.color = color || 'black';
	this.font = font || '50px sans-serif';
}

Text.prototype = new Entity();

Text.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.font = this.font;
	ctx.textAlign = this.align;
	ctx.fillText(this.text, this.x, this.y, this.getArea().width());
};
