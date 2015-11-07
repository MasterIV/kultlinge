function ThermoMix(levelIngredients, levelScene) {
	var self = this;
	
	this.levelScene = levelScene;
	
	this.slots = [];
	
	var ingWidth = 256;
	var ingHeight = 256;
	var xPos = [0.04, 0.15, 0.26, 0.64, 0.75, 0.86].map(function(x){ return x*game.width });
	
	
	var i = 0;
	ingredientObjects = [];
	for(var ingredient in ingredients) {
		var step = Math.floor(Math.abs((Object.keys(ingredients).length-1)/2 - i));
		var top = game.height - ingHeight * (1 + 0.05*(step)*(step));
		var left = xPos[i];

		var representation = new Ingredient(ingredient, 2);
		var dragable = new Dragable([representation]);
		dragable.data = ingredient;

		dragable.position = new V2(0, 0);
		dragable.size = new V2(0, 0);
		
		dragable.setPosition(left, top);
		dragable.returnsToOrigin = true;

		ingredientObjects.push(dragable);
		this.entities.push(dragable);
		

		i++;
	}
	
	var dropable = new Dropable([new Placeholder(0, 0, 400, 176, 'red')], ingredientObjects);
	dropable.setPosition((game.width-400)/2, game.height-176);
	dropable.onDrop = function(dragable) { self.handleDrop(dragable); };	
	this.entities.unshift(dropable);
}

ThermoMix.prototype = new Entity();

ThermoMix.prototype.handleDrop = function(dragable) {
	this.slots.push(dragable.data);
	if(this.slots.length >= 3) {
		for(var spellName in spells) {
			var spell = spells[spellName];
			if(spell.ingredients.sort().toString() == this.slots.sort().toString()) {
				this.levelScene.level.setSpell(spellName);
			}
		}
		this.slots = [];
	}	
};