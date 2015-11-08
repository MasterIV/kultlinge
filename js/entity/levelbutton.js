g.add('img/ui/level-selection.png');

function LevelButton(pos, state, callback) {
	this.state = state;
	this.button = 
		new SpriteButton(
			'img/ui/level-selection.png', 
			pos, 
			Rect.create(0, 0, 450, 360), 
			null, 
			callback,
			'sound/button.mp3'
		);
	this.entities = [this.button];
}

LevelButton.prototype = new Entity();

LevelButton.prototype.setLevel = function(level) {
	this.button.level = level;
};

LevelButton.prototype.draw = function(ctx) {
	if(this.state == 1)
		ctx.globalAlpha = 0.5;
	
	this.button.draw(ctx);
	ctx.globalAlpha = 1;
};