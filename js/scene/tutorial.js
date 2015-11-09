g.add('img/tut/screenshot.png');
g.add('img/tut/step-1.png');
g.add('img/tut/step-2.png');

function TutorialScene(levelScene) {
	this.bg = new Sprite('img/tut/screenshot.png');
	this.entities = [
		new AnimatedImage('img/tut/step-1.png', new V2(0, 0), 1, 10000)
	];
	
	var c = 0;
	this.onClick = function() {
		s.play('sound/button.mp3');
		if(c >= 1) { game.scene = levelScene; return; }
		
		this.entities = [
			new AnimatedImage('img/tut/step-2.png', new V2(0, 0), 1, 10000)
		];
		c++;
	};
	
}

TutorialScene.prototype = new Scene();