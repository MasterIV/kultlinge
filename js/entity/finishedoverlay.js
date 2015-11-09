g.add('img/ui/main_menu_button_half.png');

function FinishedOverlay(stars, level) {
	this.size = new V2(1600, 800);
	this.position = new V2(game.width / 2 - 800 , game.height / 2 - 400);
	
	var background = new Placeholder();
	background.color = 'rgba(255,255,255,0)';
	background.size = this.size;
	var text = stars > 0 ? 'Victory!' : "Failed!";
	
	var looseText = new Text(text, new V2(this.size.x / 2, 180));
	looseText.font = "140px sans-serif";
	looseText.color = 'green';
	looseText.setSize(700, 140);

	this.entities = [
		new AnimatedImage('img/ui/victory_overlay.png', new V2(0, 0), 1, 10000),			
		//background,
		looseText,
		new AnimatedImage('img/ui/main_menu_button_half.png', new V2(this.size.x / 2 - 600, 800-160-85), 1, 10000),
		new AnimatedImage('img/ui/main_menu_button_half.png', new V2(this.size.x / 2 +20, 800-160-85), 1, 10000),
		new TextButton(
			"Try again", 
			new V2(this.size.x / 2 - 600, 800-160-100), 
			new V2(580, 160), 
			{background: 'rgba(0,0,0,0)', border: 'rgba(0,0,0,0)', text:'white'}, 
			function() {
				game.scene = new LevelScene(level);
			},
			null,
			'sound/button.mp3',
			'50px sans-serif'
		),
		new TextButton(
			stars && level < levels.length -1 ? "Next Level": "Level selection",
			new V2(this.size.x / 2 + 20, 800-160-100), 
			new V2(580, 160), 
			{background: 'rgba(0,0,0,0)', border: 'rgba(0,0,0,0)', text:'white'},
			function() {
				if( stars && level < levels.length-1  ) {
					game.scene = new LevelScene(level+1);
				} else {
					scenes.levelselection.updateLevels();
					game.scene = scenes.levelselection;
				}
			},
			null,
			'sound/button.mp3',
			'50px sans-serif'
		)
	];

	for(var s = 0; s < 3; s++) {	
		var star = new Star(2 - (stars >= s + 1), new V2( s * 150 + this.size.x/2 - (150*3)/2 + 20, 300 ));
		this.entities.push(star);
	}
	
	if(stars > 0 && stars > Number(ScoreRegister.get(level))) {
		ScoreRegister.put(level, stars);
	}		
}

FinishedOverlay.prototype = new Entity();