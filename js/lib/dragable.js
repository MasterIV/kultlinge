function Dragable(entities){
	this.isDragging = false;
	this.entities = entities;
	this.returnsToOrigin = false;
	
	this._update = this.update;
	this.update = function(delta) {
		if(this.isDragging) {
			var offset = this.getOffsetSinceLastDrag();
			this.position.add(offset);
		}
		
		this._update(delta);
	}

	this.onDragStart = function() {
		// implement in main
	};
	
	this.onDragEnd = function() {
		// implement in main
	};

	this.onMouseDown = function() {
		this.isDragging = true;
		this.origin = this.position.copy();
		this.onDragStart();
	};
	
	this._mouseup = this.mouseup;	
	this.mouseup = function(pos) {
		if(this.isDragging) {
			this.isDragging = false;
			this.lastDragPosition = null;
			this.onDragEnd();
			if(this.returnsToOrigin) {
				this.position = this.origin;
			}
		}

		this._mouseup(pos);
	};
	
	this.getOffsetSinceLastDrag = function() {
		var prevDragPosition = this.lastDragPosition;
		this.lastDragPosition = new V2(mouse.x, mouse.y);
		if(prevDragPosition) {
			var offset = this.lastDragPosition.dif(prevDragPosition);
			return offset;
		}
		return new V2(0,0);
	}
	
}

Dragable.prototype = new Entity();
Dragable.prototype.constructor = Dragable;