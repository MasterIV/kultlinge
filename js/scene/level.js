g.add('img/level/bg.png');

function LevelScene( i ) {
	var level = levels[i];
	this.bg = new Sprite('img/level/bg.png');

	if( level.spell ) {
		this.blocking = [new SpellOverlay(level.spell)];
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