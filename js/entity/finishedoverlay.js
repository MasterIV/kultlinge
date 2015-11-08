function FinishedOverlay(stars, level) {
	this.size = new V2(800, 600);
	this.position = new V2(game.width / 2 - 400 , game.height / 2 - 300);
	
	var background = new Placeholder();
	background.color = 'rgba(255,255,255,0.9)';
	background.size = this.size;
	var text = stars > 0 ? 'Victory!' : "Failed!";
	
	var looseText = new Text(text, new V2(this.size.x / 2, 180));
	looseText.font = "140px sans-serif";
	looseText.setSize(700, 140);

	this.entities = [
		background,
		looseText,
		new TextButton(
			"Try again", 
			new V2(this.size.x / 2 - 300, 370), 
			new V2(280, 160), 
			{background: 'rgba(0,0,0,0.2)'}, 
			function() {
				game.scene = new LevelScene(level);
			},
			{font:'#333333'},
			'sound/button.wav'
		),
		new TextButton(
			stars && level < levels.length -1 ? "Next Level": "Level selection",
			new V2(this.size.x / 2 + 20, 370), 
			new V2(280, 160), 
			{background: 'rgba(0,0,0,0.2)'},
			function() {
				if( stars && level < levels.length-1  ) {
					game.scene = new LevelScene(level+1);
				} else {
					scenes.levelselection.updateLevels();
					game.scene = scenes.levelselection;
				}
			},
			{font:'#333333'},
			'sound/button.wav'
		)
	];

	for(var s = 0; s < 3; s++) {	
		var star = new Star(2 - (stars >= s + 1), new V2( s * 110 + 230, 220 ));
		this.entities.push(star);
	}
	
	if(stars > 0 && stars > Number(ScoreRegister.get(level))) {
		ScoreRegister.put(level, stars);
	}	
}

FinishedOverlay.prototype = new Entity();