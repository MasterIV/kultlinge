g.add('img/ui/menu.png');

function MainScene() {
	this.bg = new Sprite("img/ui/menu.png");

	this.entities = [
			new GameButton( new V2( 140, 850), "Play", function() { game.scene = scenes.levelselection; }),
			new GameButton( new V2( 840, 850), "Rituals", function() { game.scene = scenes.spellbook; }),
			new GameButton( new V2(1540, 850), "Credits", function() { game.scene = scenes.credits; }),
			new FullscreenButton()
	];
}

MainScene.prototype = new Scene();