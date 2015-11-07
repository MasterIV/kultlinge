g.add('img/ui/bg.png');
g.add('img/ui/level-button.png');
g.add('img/ui/level-button-1.png');
g.add('img/ui/level-button-2.png');
g.add('img/ui/level-button-3.png');
g.add('img/ui/level-button-locked.png');

function LevelSelectionScene() {
	var self = this;
	this.bg = new Sprite('img/ui/bg.png');
	this.gridX = 5;
	this.gridY = 3;
	this.buttonSize = 360;
	this.gutter = 50;
	this.startX = (game.width - this.gridX * this.buttonSize - (( this.gridX - 1 ) * this.gutter)) / 2;
	this.startY = (game.height - this.gridY * this.buttonSize - ((this.gridY - 1 ) * this.gutter)) / 2;
	this.buttonTextColor = 'black';
	this.buttonTextColorLocked = '#342f2f';
	
	var i = 0;
	for(var y = 0; y < this.gridY; y++) {
		for(var x = 0; x < this.gridX; x++) {
			var bx = this.startX + x * this.buttonSize + x * this.gutter;
			var by = this.startY + y * this.buttonSize + y * this.gutter;
			var level = levels[i];
			
			if(level !== undefined) {
				
				var color = this.buttonTextColor,
					img = 'img/ui/level-button.png',
					levelData = localStorage.getItem('level-' + ( i + 1 )),
					levelDataBefore = i > 0 ? localStorage.getItem('level-'+i) : null,
					locked = false;
					
				if(levelData) {
					img = 'img/ui/level-button-' + levelData + '.png';
				}
				
				if(!levelData && !levelDataBefore && i != 0) {
					color = this.buttonTextColorLocked;
					img = 'img/ui/level-button-locked.png';
					locked = true;
				}
				
				var button = new Button(img, img,
											bx, by, !locked ? self.selectLevel : null );
				button.level = i;
				
				var text = new Text('Level ' + (i + 1), 
									new V2( bx + this.buttonSize / 2, by + this.buttonSize / 2), 
									'50px sans-serif', 
									color
								);
				text.setSize(360, 50);
				
				this.entities.push(button);
				this.entities.push(text);
			}
			
			i++;
		}
	}
}

LevelSelectionScene.prototype = new Scene();

LevelSelectionScene.prototype.selectLevel = function() {
	game.scene = new LevelScene(this.level);
};