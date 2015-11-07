g.add('img/ui/bg.png');
g.add('img/ui/level-button.png');

function LevelSelectionScene() {
	this.bg = new Sprite('img/ui/bg.png');
	this.gridX = 5;
	this.gridY = 3;
	this.buttonSize = 360;
	this.gutter = 50;
	this.startX = (game.width - this.gridX * this.buttonSize - (( this.gridX - 1 ) * this.gutter)) / 2;
	this.startY = (game.height - this.gridY * this.buttonSize - ((this.gridY - 1 ) * this.gutter)) / 2;
	
	this.levels = [
		{},
		{},
		{locked: true},
		{locked: true},
		{locked: true},
		{locked: true},
		{locked: true},
	];
	
	var i = 0;
	for(var y = 0; y < this.gridY; y++) {
		for(var x = 0; x < this.gridX; x++) {
			var bx = this.startX + x * this.buttonSize + x * this.gutter;
			var by = this.startY + y * this.buttonSize + y * this.gutter;
			
			if(this.levels[i] !== undefined) {
				
				this.entities.push(new Button('img/ui/level-button.png', 'img/ui/level-button.png', 
							bx, by, this.selectLevel));
				var t = new Text( 'Level ' + (i + 1), bx + this.buttonSize / 2, by + this.buttonSize / 2, this.buttonSize);
				t.setSize(360, 50);
				this.entities.push(t);
			}
			
			i++;
		}
	}
}

LevelSelectionScene.prototype = new Scene();

LevelSelectionScene.prototype.selectLevel = function() {
	game.scene = scenes.map;
};