function SpellOverlay(spell, maxChars, slim) {
	var spell = spells[spell]; 
	
	slim = slim || false;
	
	/*{
		SPELL: frost: { name: "Einfrieren", ingridients: [], description: "Nicht nur Jesus kann über Wasser gehen, zumindest wenn dieses Gefrohren ist." },
	};*/
	
	var self = this;
	
	this.background = new Placeholder();
	this.background.size = this.size;
	this.background.color = 'rgba(255,255,255,.9)';
	
	this.heading = new Text(spell.name);
	this.heading.color = 'green';

	this.entities = [this.background, this.heading];

	var descriptionLines = Text.prototype.wordwrap(spell.description, maxChars || 50);
	this.descriptions = [];
	for(var i = 0; i < descriptionLines.length; i++) {
		var descriptionLine = descriptionLines[i];
		var desc = new Text(descriptionLine);
		desc.color = 'black';
		//desc.align = 'left';
		desc.font = '40px sans-serif';
		this.descriptions.push(desc);
		this.entities.push(desc);
	}
	
	this.slots = [
		new Ingredient(spell.ingredients[0], 0.8),
		new Ingredient(spell.ingredients[1], 0.8),
		new Ingredient(spell.ingredients[2], 0.8)
	];

	for(var i = 0; i < this.slots.length; i++) {
		var slot = this.slots[i];
		slot.size = new V2(0, 0);
		slot.position = new V2(0, 0);
		this.entities.push(slot);
	}

	this._setSize = this.setSize;
	this.setSize = function(w, h){
		this._setSize(w, h);
		this.background.size = this.size;
		this.heading.position = new V2(this.getArea().width()/2, 90);
		this.heading.size = this.size;

		for(var i = 0; i < this.descriptions.length; i++) {
			var description = this.descriptions[i];
			description.position = new V2(this.getArea().width()/2, 426 + 50*i);
			description.size = new V2(this.getArea().width()-100, 40);
		}
		
		var offsetLeft = (this.getArea().width() - (256*3 + 20*2))/2 + (slim?100:32);
		for(var i = 0; i < this.slots.length; i++) {
			var slot = this.slots[i];
			slot.position = new V2((slim?200:256)*i + offsetLeft, 140);
		}
	}
}

SpellOverlay.prototype = new Entity();