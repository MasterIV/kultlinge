function Dropable(entity, ondrop, acceptsDropables){
	this.entity = entity;
	this.acceptsDropables = acceptsDropables || [];

	this.setSize = function( w, h ) {
		this.entity.setSize(w, h);
	};

	this.setPosition = function(x, y) {
		this.entity.setPosition(x, y);
	};

	this.getArea = function() {
		return this.entity.getArea();
	};

	this.update = function(delta) {
		if(this.entity.update) {
			this.entity.update(delta);
		}
	}

	this.draw = function(ctx) {
		if(this.entity.draw) {
			this.entity.draw(ctx);
		}
	}

	this.click = function(pos) {
		if(this.entity.click) {
			this.entity.click(pos);
		}
	}

	this.onDrop = ondrop || (function(dragable) {
		// implement in main
	});

	this.onMouseUp = function(pos) {
		for(var i = 0; i < this.acceptsDropables.length; i++) {
			var dragable = this.acceptsDropables[i];
			if(dragable.isDragging){
				this.onDrop(dragable);
			}
		}
		
		if(this.entity.onMouseUp) {
			this.entity.onMouseUp(pos);
		}
	}

}

Dragable.prototype = new Entity();