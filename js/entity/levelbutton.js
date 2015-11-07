g.add('img/ui/level-button.png');

function LevelButton(pos, state, callback) {
	console.log(pos);
	this.entities = [
		new SpriteButton('img/ui/level-button.png', pos, Rect.create(360* state, 0, 360 * (state + 1), 360), null, callback)
	];
}

LevelButton.prototype = new Entity();