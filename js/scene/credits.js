g.add('img/ui/bg-credits.png');

function CreditsScene() {
	this.bg = new Sprite('img/ui/bg-credits.png');
	this.entities = [new BackButton(scenes.main)];
}

CreditsScene.prototype = new Scene();