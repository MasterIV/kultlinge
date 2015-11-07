function SpellOverlay() {
	var background = new Placeholder();
	background.position = this.position;
	background.size = this.size;
	background.color = 'red';
	
	var text = new Text('Hallo Welt', new V2(0, 0), 50);
	text.color = 'green';
	this.entities = [background, text];
}

SpellOverlay.prototype = new Entity();