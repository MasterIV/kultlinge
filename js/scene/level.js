g.add('img/level/bg.png');
g.add('img/spells/spell_ready_wall.png');
g.add('img/spells/spell_ready_rain.png');
g.add('img/spells/spell_ready_burn.png');
g.add('img/spells/spell_ready_detonate.png');
g.add('img/ui/main_menu_button.png');
g.add('img/ui/victory_overlay.png');

function LevelScene( i ) {
	var self = this;
	
	var level = levels[i];
	this.bg = new Sprite('img/level/bg.png');
	this.i = i;

	if( level.spell ) {
		var overlay = new SpellOverlay(level.spell);
		overlay.setPosition(350, 250);
		overlay.setSize(this.getArea().width()-700, this.getArea().height()-500);
		
		var goButton = new Placeholder();
		goButton.color = 'rgba(0,0,0,0)';
		goButton.setPosition(overlay.position.x + overlay.getArea().width()/2 - 200, overlay.position.y + overlay.getArea().height() - 200);
		goButton.setSize(400, 160);
		goButton.onClick = function(){
			self.blocking = [];
			s.play('sound/button.mp3');
			AddBackbutton(scenes.levelselection, self.entities);
		};
		var bimage = new AnimatedImage('img/ui/main_menu_button.png', new V2(985, 840), 1, 10000);
		bimage.scale = 0.5;
		
		var bgimage = new AnimatedImage('img/ui/victory_overlay.png', new V2(335, 240), 1, 10000);
		//bimage.scale = 0.5;
		
		var text = new Text("Start");
		text.color = "white";
		text.size = goButton.size;
		text.position = new V2(overlay.position.x + overlay.getArea().width()/2, overlay.position.y + overlay.getArea().height()-100);
		
		this.blocking = [bgimage, overlay, bimage, goButton, text];
	
	} else {
		AddBackbutton(scenes.levelselection, this.entities);
	}

	this.entities = [
		this.level = new Level(level, this),
		this.mix = new ThermoMix(level.shuffle ? this.shuffle(level.ingredients) : level.ingredients, this),
		this.ready = new AnimatedImage('img/spells/spell_ready_wall.png', new V2(1010, 960), 10, 100 )
	];

	this.ready.visible = false;
	this.ready.scale = 2;
}

LevelScene.prototype = new Scene();

LevelScene.prototype.shuffle = function( ingredients ) {
	var keys = [];
	var shuffled = {};

	for( var i in ingredients )
		keys.push(i);

	keys = shuffle(keys);

	for( var i = 0; i < keys.length; i++ )
		shuffled[keys[i]] = ingredients[keys[i]];

	return shuffled;
};