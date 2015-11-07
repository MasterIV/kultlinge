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
				
				var button = new Button('img/ui/level-button.png', 'img/ui/level-button.png', 
											bx, by, this.selectLevel);
				
				var text = new Text('Level ' + (i + 1), 
									new V2(
										bx + this.buttonSize / 2, 
										by + this.buttonSize / 2
									));
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
	game.scene = scenes.rituals;
};