function Entity() {
	this.position = new V2(0, 0);
	this.size = new V2(0, 0);
	this.entities = [];
}

Entity.prototype.setSize = function(w, h) {
	this.size.x = w;
	this.size.y = h;
};

Entity.prototype.inheritSize = function() {
	var origin = new V2(0, 0);
	var end = new V2(0, 0);
	for (var i = 0; i < this.entities.length; i++) {
		var entity = this.entities[i];
		
		origin.x = Math.min(entity.position.x, origin.x);
		origin.y = Math.min(entity.position.y, origin.y);
		end.x = Math.max(entity.getArea().p2.x, end.x);
		end.y = Math.max(entity.getArea().p2.y, end.y);
	}
	this.size = end.sub(origin);
}

Entity.prototype.setPosition = function(x, y) {
	this.position.x = x;
	this.position.y = y;
};

Entity.prototype.update = function(delta) {
	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].update)
			this.entities[i].update(delta);
};

Entity.prototype.getArea = function() {
	if(this.size.x == 0 && this.size.y == 0) this.inheritSize();
	return new Rect(this.position, this.position.sum(this.size));
};

Entity.prototype.draw = function(ctx) {
	ctx.save();
	ctx.translate(this.position.x, this.position.y);
	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].draw)
			this.entities[i].draw(ctx);
	ctx.restore();
};

Entity.prototype.click = function(pos) {
	if (!this.getArea().inside(pos)) return;
	if (this.onClick) this.onClick();
	var pos = pos.dif(this.position);

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].click)
			this.entities[i].click(pos);
};

Entity.prototype.mousedown = function(pos) {
	if (!this.getArea().inside(pos)) return;
	if (this.onMouseDown) this.onMouseDown();
	var pos = pos.dif(this.position);

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].mousedown)
			this.entities[i].mousedown(pos);
};

Entity.prototype.mouseup = function(pos) {
	if (!this.getArea().inside(pos)) return;
	if (this.onMouseUp) this.onMouseUp();
	var pos = pos.dif(this.position);

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].mouseup)
			this.entities[i].mouseup(pos);
};