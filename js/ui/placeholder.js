function Placeholder(x, y, width, height, color) {
	this.position = new V2(x, y);
	this.size = new V2(width, height);
	this.color = color || 'yellow';
	
	this.draw = function(ctx) {
		var area = this.getArea();
		ctx.fillStyle = color;
		ctx.fillRect(area.p1.x, area.p1.y, area.width(), area.height());
	}
}

Placeholder.prototype = new Entity();