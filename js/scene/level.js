function LevelScene( i ) {
	var level = levels[i];

	if( level.spell ) {
		this.blocking = [new SpellOverlay(level.spell)];
	}

	this.entities = [
		this.level = new Level(level),
		this.mix = new ThermoMix(level.ingredients, this.level)
	]
}

LevelScene.prototype = new Scene();