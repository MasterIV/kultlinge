
g.add('img/ui/bg-credits.png');
g.add('img/ui/credits-back-button.png');

function CreditsScene() {
	this.bg = new Sprite('img/ui/bg-credits.png');
	this.entities = [];
	
	AddBackbutton(scenes.main, this.entities);
}

CreditsScene.prototype = new Scene();