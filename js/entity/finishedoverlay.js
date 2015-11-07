function FinishedOverlay() {
	
	var background = new Placeholder();
	background.color = 'yellow';
	background.size = this.size;
	
	var looseText = new Text("You failed!",
								new V2(this.position.x + this.size.width / 2, this.position.y + this.size.height/2)	
							);
	looseText.font = "100px sans-serif";
	looseText.setSize(200, 200);
	this.entities = [
		background,
		looseText
	];
	
	
}

FinishedOverlay.prototype = new Entity();