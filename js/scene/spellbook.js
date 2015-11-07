function SpellbookScene() {
	for(var i in spells) {
		var spell = spells[i];
		var spellOverlay = new SpellOverlay(i);
		spellOverlay.position = new V2(0, 0);
		spellOverlay.size = new V2(0, 0);
		spellOverlay.setPosition(100, 100);
		spellOverlay.setSize(400, 300);
		this.entities.push(spellOverlay);
	}
}


SpellbookScene.prototype = new Scene();
SpellbookScene.prototype.constructor = SpellbookScene;