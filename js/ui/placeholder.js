function Placeholder(x, y, width, height) {
	this.setPosition(x, y);
	this.setSize(w, h);
	
	this.draw = function(ctx) {
		var area = this.getArea();
		context.fillStyle = 'yellow';
		ctx.fillRect(area.p1.x, area.p1.y, area.width(), area.height());
	}
}

Placeholder.prototype = new Entity();