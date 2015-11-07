
g.add('img/ui/bg-credits.png');
g.add('img/ui/credits-back-button.png');

function CreditsScene() {
	this.bg = new Sprite('img/ui/bg-credits.png');
	
	this.entities = [
		new Button('img/ui/credits-back-button.png', 'img/ui/credits-back-button.png', game.width / 2 - 400, game.height - 250, function() {
			game.scene = scenes.main;
		})
	];
}

CreditsScene.prototype = new Scene();