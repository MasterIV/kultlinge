g.add('img/ui/level-button.png');

function LevelButton(pos, state, callback) {
	this.entities = [
		new SpriteButton(
			'img/ui/level-button.png', 
			pos, 
			Rect.create(360* state, 0, 360 * (state + 1), 360), 
			null, 
			callback,
			'sound/button.wav'
		)
	];
}

LevelButton.prototype = new Entity();

LevelButton.prototype.setLevel = function(level) {
	this.entities[0].level = level;
};