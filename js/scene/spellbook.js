function SpellbookScene() {
	var self = this;
	
	this.bg = new Sprite('img/level/bg.png');
	
	var i = 0;
	for(var name in spells) {
		var spellOverlay = new SpellOverlay(name, 30);
		spellOverlay.position = new V2(0, 0);
		spellOverlay.size = new V2(0, 0);
		spellOverlay.setSize(700, 600);
		this.entities.push(spellOverlay);

		spellOverlay.setPosition((700+43)*(i%3), 50 + 650*Math.floor(i/3));
		i++;
	}
	
	var dragable = new Dragable(this.entities);
	dragable.__update = dragable.update;
	dragable.update = function(delta) {
		this.__update(delta);
		
		this.position.x = 43;
		this.position.y = Math.min(Math.max(this.position.y, self.getArea().height()-this.getArea().height() - 50), 0);
	};
	this.entities = [dragable];
}


SpellbookScene.prototype = new Scene();
SpellbookScene.prototype.constructor = SpellbookScene;