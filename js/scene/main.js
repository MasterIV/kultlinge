g.add("img/level/bg.png");

function MainScene() {
	
	this.bg = new Sprite("img/level/bg.png");
	
	this.entities = [
		new TextButton(
			"Start", 
			new V2(game.width/2 - 400, 150), 
			new V2(800, 300), 
			{ background: 'rgba(255,255,255,0.8)' }, 
			function() {
				backgroundsound.play('sound/bg2.mp3');
				game.scene = scenes.levelselection;
			},
			{ background: 'rgba(255,255,255,1)' },
			'sound/button.mp3',
			'50px sans-serif'
		),
		new TextButton(
			"Spellbook", 
			new V2(game.width/2 - 400, 500), 
			new V2(800, 300), 
			{ background: 'rgba(255,255,255,0.8)' }, 
			function() {
				game.scene = scenes.spellbook;
			},
			{ background: 'rgba(255,255,255,1)' },
			'sound/button.mp3',
			'50px sans-serif'
		),
		new TextButton(
			"Credits", 
			new V2(game.width/2 - 400, 850), 
			new V2(800, 300), 
			{ background: 'rgba(255,255,255,0.8)' }, 
			function() {
				game.scene = scenes.credits;
			},
			{ background: 'rgba(255,255,255,1)' },
			'sound/button.mp3',
			'50px sans-serif'
		),
		];	
}

MainScene.prototype = new Scene();
