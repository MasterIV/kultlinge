function Dropable(entities, acceptedDragables){
	this.entities = entities;
	this.acceptedDragables = acceptedDragables || [];

	this.onDrop = function(dragable) {
		// implement in main
	};

	this.onMouseUp = function(pos) {
		for(var i = 0; i < this.acceptedDragables.length; i++) {
			var dragable = this.acceptedDragables[i];
			if(dragable.isDragging || dragable.wasDragging){
				dragable.wasDragging = false;
				this.onDrop(dragable);
			}
		}
	}
	
}

Dropable.prototype = new Entity();
Dragable.prototype.constructor = Dragable;