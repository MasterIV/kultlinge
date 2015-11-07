g.add('img/ui/bg.png');

function LevelSelectionScene() {
	var self = this;
	this.bg = new Sprite('img/ui/bg.png');
	
	// grid settings
	this.gridX = 4;
	this.gridY = 2;
	this.buttonSize = 360;
	this.gutter = 50;
	
	this.startX = (game.width - this.gridX * this.buttonSize - (( this.gridX - 1 ) * this.gutter)) / 2;
	this.startY = (game.height - this.gridY * this.buttonSize - (( this.gridY - 1 ) * this.gutter)) / 2;
	this.buttonTextColor = 'black';
	this.buttonTextColorLocked = '#342f2f';
	this.updateLevels();
}

LevelSelectionScene.prototype = new Scene();
LevelSelectionScene.prototype.updateLevels = function() {
	var self = this;
	this.entities = [];
	var i = 0;
	for(var y = 0; y < this.gridY; y++) {
		for(var x = 0; x < this.gridX; x++) {
			var bx = this.startX + x * this.buttonSize + x * this.gutter;
			var by = this.startY + y * this.buttonSize + y * this.gutter;
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
				
				var text = new Text('Level ' + (i + 1), 
									new V2( bx + this.buttonSize / 2, by + this.buttonSize / 2), 
									'50px sans-serif', 
									color
								);
				text.setSize(360, 50);
				
				this.entities.push(button);
				this.entities.push(text);
				
				for(var s = 0; s < 3; s++) {	
					var type = locked ? 0 : s < Number(levelData) ? 1 : 2;
					
					var star = new Star(type);
					star.setPosition(bx + ( 27 * (s + 1 )) + s * star.width , by + this.buttonSize - star.width - 27);
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