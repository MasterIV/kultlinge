g.add('img/level/bg.png');

function LevelSelectionScene() {
	var self = this;
	this.bg = new Sprite('img/level/bg.png');
	
	// grid settings
	this.gridX = 4;
	this.gridY = 2;
	this.buttonSizeY = 360;
	this.buttonSizeX = 450;
	this.gutter = 50;
	
	this.startX = (game.width - this.gridX * this.buttonSizeX - (( this.gridX - 1 ) * this.gutter)) / 2;
	this.startY = (game.height - this.gridY * this.buttonSizeY - (( this.gridY - 1 ) * this.gutter)) / 2;
	this.buttonTextColor = 'white';
	this.buttonTextColorLocked = '#342f2f';
	
	this.starGutter = 25;
	this.starXOffset = 50;
	this.starYOffset = -37;
	
	this.updateLevels();	
}

LevelSelectionScene.prototype = new Scene();
LevelSelectionScene.prototype.updateLevels = function() {
	var self = this;
	this.entities = [];

	AddBackbutton(scenes.main, this.entities);
	
	var i = 0;
	for(var y = 0; y < this.gridY; y++) {
		for(var x = 0; x < this.gridX; x++) {
			var bx = this.startX + x * this.buttonSizeX + x * this.gutter;
			var by = this.startY + y * this.buttonSizeY + y * this.gutter;
			var level = levels[i];
			
			if(level !== undefined) {
				
				var color = this.buttonTextColor,
					levelData = ScoreRegister.get(i),
					levelDataBefore = i > 0 ? ScoreRegister.get(i-1) : null,
					locked = false;
				
				if(!levelData && !levelDataBefore && i != 0) {
					color = this.buttonTextColorLocked;
					locked = true;
				}
				
				var button = new LevelButton( new V2(bx, by), !locked ? 0 : 1, !locked ? self.selectLevel : null);
				button.setLevel(i);
				
				var text = new Text('' + (i + 1), 
									new V2( bx + this.buttonSizeX / 2, by + this.buttonSizeY / 2), 
									'100px sans-serif', 
									color
								);
				text.setSize(360, 50);
				
				this.entities.push(button);
				this.entities.push(text);
				
				for(var s = 0; s < 3; s++) {	
					var type = locked ? 0 : s < Number(levelData) ? 1 : 2;
					var star = new Star(type);
										
					star.setPosition(bx + this.starXOffset + ( this.starGutter * ( s )) + s * star.width, by + this.buttonSizeY - star.width + this.starYOffset);
					this.entities.push(star);
				}
			}
			
			i++;
		}
	}
};

LevelSelectionScene.prototype.selectLevel = function() {
	game.scene = new LevelScene(this.level);
};