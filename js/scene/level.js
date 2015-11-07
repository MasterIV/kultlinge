g.add('img/level/bg.png');

function LevelScene( i ) {
	var self = this;
	
	var level = levels[i];
	this.bg = new Sprite('img/level/bg.png');

	if( level.spell ) {
		var overlay = new SpellOverlay(level.spell);
		overlay.setPosition(600, 300);
		overlay.setSize(this.getArea().width()-1200, this.getArea().height()-600);
		
		var goButton = new Placeholder();
		goButton.color = "black";
		goButton.setPosition(overlay.position.x + overlay.getArea().width()/2 - 150, overlay.position.y + overlay.getArea().height() - 150);
		goButton.setSize(300, 100);
		goButton.onClick = function(){
			self.blocking = [];
		}
		
		this.blocking = [overlay, goButton];
		/*
		
		spellOverlay.setPosition(600, 300);
		spellOverlay.setSize(this.getArea().width()-1200, this.getArea().height()-600);
		
		var goButton = new Placeholder();
		goButton.setPosition(800, 220);
		this.entities.push(goButton);
		goButton.onClick = function(){
		self.entities.pop(); self.entities.pop();
		
		*/
	
	}

	this.entities = [
		this.level = new Level(level, this),
		this.mix = new ThermoMix(level.ingredients, this)
	];
}

LevelScene.prototype = new Scene();

LevelScene.prototype.kultlingKilled = function() {

};

LevelScene.prototype.kultlingSacrificed = function() {

};

LevelScene.prototype.checkComplete = function() {

};