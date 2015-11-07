function SpellOverlay() {
	var self = this;
	
	var background = new Placeholder();
	background.size = this.size;
	background.color = 'red';
	
	this.heading = new Text('Hallo Welt');
	this.heading.color = 'green';

	this.entities = [background, this.heading];

	var descriptionLines = Text.prototype.wordwrap('Heute back ich, morgen brau ich! Heute back ich, morgen brau ich! Heute back ich, morgen brau ich!', 50);
	this.descriptions = [];
	for(var i = 0; i < descriptionLines.length; i++) {
		var descriptionLine = descriptionLines[i];
		var desc = new Text(descriptionLine);
		desc.color = 'green';
		desc.align = 'left';
		desc.font = '40px sans-serif';
		this.descriptions.push(desc);
		this.entities.push(desc);
	}
	
	this.startbutton = new Placeholder(0, 0, 400, 88);
	this.startbutton.onClick = function(){
		self.onClose();
	}
	this.entities.push(this.startbutton);

	this.onclose = function(){};
	
	
	this.slots = [
		new Placeholder(),
		new Placeholder(),
		new Placeholder()
	];
	for(var i = 0; i < this.slots.length; i++) {
		var slot = this.slots[i];
		slot.color = 'orange';
		slot.size = new V2(176, 176);
		this.entities.push(slot);
	}

	this._setSize = this.setSize;
	this.setSize = function(w, h){
		this._setSize(w, h);
		this.heading.position = new V2(this.getArea().width()/2, 90);
		this.startbutton.position = new V2((this.getArea().width()-400)/2 , this.getArea().height() - 138);

		for(var i = 0; i < this.descriptions.length; i++) {
			var description = this.descriptions[i];
			description.position = new V2(50, 416 + 50*i);
			description.size = new V2(this.getArea().width()-100, 40);
		}
		
		var offsetLeft = (this.getArea().width() - (176*3 + 20*2))/2;
		for(var i = 0; i < this.slots.length; i++) {
			var slot = this.slots[i];
			slot.position = new V2(196*i + offsetLeft, 140);
		}
	}
}

SpellOverlay.prototype = new Entity();