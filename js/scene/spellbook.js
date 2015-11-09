function SpellbookScene() {
	this.bg = new Sprite('img/level/bg.png');
	this.entities = [new BackButton(scenes.main)];

	var i = 0;
	for(var name in spells) {
		var pos = new V2( 146+(1025)*(i%2), 82+585*Math.floor(i/2));
		this.entities.push(new SpellOverlay(pos, name, 28));
		i++;
	}
}

SpellbookScene.prototype = new Scene();