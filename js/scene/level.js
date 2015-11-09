g.add('img/level/bg.png');
g.add('img/spells/spell_ready_wall.png');
g.add('img/spells/spell_ready_rain.png');
g.add('img/spells/spell_ready_burn.png');
g.add('img/spells/spell_ready_detonate.png');
g.add('img/klickme.png');

function LevelScene( i ) {
	var level = levels[i];
	var self = this;

	this.bg = new Sprite('img/level/bg.png');
	this.i = i;

	if( level.spell ) {
		this.blocking = [ new SpellOverlay(new V2(336, 200), level.spell, 50,
				new FlatButton(new V2(500, 600), "Start", function() { self.blocking = []; }))];
	}

	this.entities = [
			this.level = new Level(level, this),
			this.mix = new ThermoMix(level.shuffle ? this.shuffle(level.ingredients) : level.ingredients, this),
			this.ready = new AnimatedImage('img/spells/spell_ready_wall.png', new V2(1010, 960), 10, 100 ),
			new BackButton(scenes.levelselection)
	];

	if( i == 0 ) {
		this.hint = new AnimatedImage('img/klickme.png', new V2(20+128*9, 128*3), 6, 150 );
		this.hint.visible = false;
		this.entities.push(this.hint);
	}

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