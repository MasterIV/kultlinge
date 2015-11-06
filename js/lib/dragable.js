function Dragable(entity, dragstart){
	this.entity = entity;
	this.offset = new V2(0, 0);
	this.isDragging = false;
	
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
		if(this.isDragging) {
			this.position = mouse.add(this.offset);
		}
		
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
	
	this.onDragStart = dragstart || (function() {
		// implement in main
	});
	
	this.onDragEnd = dragend || (function() {
		// implement in main
	});

	this.onMouseDown = function() {
		this.offset = mouse.dif(this.position);
		this.isDragging = true;
		
		if(this.entity.onMouseDown) {
			this.entity.onMouseDown();
		}
		
		this.ondragstart();
	}

	this.mouseup = function(pos) {
		this.offset = new V2(0, 0);
		this.isDragging = false;
		this.onDragEnd();
		
		if(this.entity.mouseup) {
			this.entity.mouseup(pos);
		}
	}

}

Dragable.prototype = new Entity();