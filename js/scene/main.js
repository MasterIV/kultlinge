g.add("img/ui/start-button.png");
g.add("img/ui/credits-button.png");
g.add("img/level/bg.png");

function MainScene() {
	
	this.bg = new Sprite("img/level/bg.png");
	
	this.entities = [
			new Button("img/ui/start-button.png", 
						"img/ui/start-button.png", 
						game.width / 2 - 400, 
						game.height / 2 - 225, 
						function() {
							game.scene = scenes.levelselection;
						},
						'sound/button.wav'),
			new Button("img/ui/credits-button.png", 
						"img/ui/credits-button.png", 
						game.width / 2 - 400, 
						game.height / 2 + 25,
						function() {
							game.scene = scenes.spellbook;
						},
						'sound/button.wav'
					),
	];	
}

MainScene.prototype = new Scene();
