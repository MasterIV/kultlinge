g.add('img/ui/victory_overlay.png');

function FinishedOverlay(stars, level) {
	this.size = new V2(1600, 800);
	this.position = new V2(game.width / 2 - 800 , game.height / 2 - 400);
	

	var text = stars > 0 ? 'Victory' : "Failed";
	
	var headline = new Text(text, new V2(this.size.x / 2, 200));
	headline.font = "200px Bones";
	headline.color = '#222';

	this.entities = [
		new ImageEntity('img/ui/victory_overlay.png'),
		headline,

		new FlatButton(new V2(this.size.x / 2 - 650, 600), "Try again", function() {
			game.scene = new LevelScene(level);
		}),

		new FlatButton(new V2(this.size.x / 2 + 50, 600), stars && level < levels.length -1 ? "Next Level": "Level selection", function() {
			if( stars && level < levels.length-1  ) {
				game.scene = new LevelScene(level+1);
			} else {
				scenes.levelselection.updateLevels();
				game.scene = scenes.levelselection;
			}
		})
	];

	for(var s = 0; s < 3; s++) {	
		var star = new Star(2 - (stars >= s + 1), new V2( s * 300 + this.size.x/2 - 400, 280 ), 2);
		this.entities.push(star);
	}
	
	if(stars > 0 && stars > Number(ScoreRegister.get(level))) {
		ScoreRegister.put(level, stars);
	}		
}

FinishedOverlay.prototype = new Entity();