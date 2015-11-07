function ThermoMix(levelIngredients, levelScene) {
	var self = this;
	
	this.levelScene = levelScene;
	
	this.slots = [];
	
	var heights = [
		game.height - 176 * 3 - 20 * 3,
		game.height - 176 * 2 - 20 * 2,
		game.height - 176 * 1 - 20 * 1
	];

	var rightmargin = game.width - 20 - 176;
	var positions = [
		new V2(20, heights[0]),
		new V2(20, heights[1]),
		new V2(20, heights[2]),
		new V2(rightmargin, heights[2]),
		new V2(rightmargin, heights[1]),
		new V2(rightmargin, heights[0]),
	];

	var ingredientObjects = [];
	var count = 0;
	for(var i in ingredients) {
		var ingredient = ingredients[i];
		var representation = new Placeholder(0, 0, 176, 176, 'blue');
		var text = new Text(i);
		text.position = new V2(100, 100);
		text.size = new V2(80, 80);
		var dragable = new Dragable([representation, text]);
		dragable.data = i;
		dragable.position = positions[count++];
		dragable.inheritSize();
		dragable.returnsToOrigin = true;

		ingredientObjects.push(dragable);
		this.entities.push(dragable);
	}
	
	var dropable = new Dropable([new Placeholder(0, 0, 400, 176, 'red')], ingredientObjects);
	dropable.setPosition((game.width-400)/2, game.height-176);
	
	dropable.onDrop = function(dragable) { 
		self.slots.push(dragable.data);
		if(self.slots.length >= 3) {
			for(var spellName in spells) {
				var spell = spells[spellName];
				if(spell.ingredients.sort().toString() == self.slots.sort().toString()) {
					self.levelScene.level.setSpell(spellName);
				}
			}
			self.slots = [];
		}
	};	
	
	this.entities.unshift(dropable);
}

ThermoMix.prototype = new Entity();