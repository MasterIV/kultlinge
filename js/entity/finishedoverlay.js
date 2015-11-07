function FinishedOverlay(stars, level) {
	console.log(stars);
	console.log(level);
	this.size = new V2(800, 400);
	this.position = new V2(game.width / 2 - 400 , game.height / 2 - 200);
	
	var background = new Placeholder();
	background.color = 'yellow';
	background.size = this.size;
	var text = stars > 0 ? 'Victory!' : "Failed!";
	
	var looseText = new Text(text, new V2(this.size.x / 2, 180));
	looseText.font = "140px sans-serif";
	looseText.setSize(700, 140);

	this.entities = [
		background,
		looseText,
		new TextButton("Try again", new V2(this.size.x / 2 - 270, 330), new V2(250, 50), {background: 'green'}, function() {
			game.scene = new LevelScene(level);
		}),
		new TextButton("Level selecttion",  new V2(this.size.x / 2 , 330), new V2(250, 50), {background: 'green'}, function() {
			scenes.levelselection.updateLevels();
			game.scene = scenes.levelselection;
		})
	];

	for(var s = 0; s < 3; s++) {	
		var star = new Star(2 - (stars >= s + 1), new V2( s * 110 + 245, 220 ));
		this.entities.push(star);
	}
	
	if(stars > 0) {
		ScoreRegister.put(level, stars);
	}	
}

FinishedOverlay.prototype = new Entity();