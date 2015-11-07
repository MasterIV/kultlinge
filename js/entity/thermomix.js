g.add('img/ui/opfergabe.png');

function ThermoMix(levelIngredients, levelScene) {
	var self = this;

	this.levelIngredients = JSON.parse(JSON.stringify(levelIngredients));
	
	this.entities = [];
	this.levelScene = levelScene;
	this.slots = [];
	
	this.size = new V2(game.width, game.height);
	
	var ingWidth = 256;
	var ingHeight = 256;
	var xPos = [0.04, 0.15, 0.26, 0.63, 0.74, 0.85].map(function(x){ return x*game.width });
	
	
	var i = 0;
	this.ingredientMap = {};
	this.counterMap = {};
	ingredientObjects = [];
	for(var ingredient in ingredients) {
		var step = Math.floor(Math.abs((Object.keys(ingredients).length-1)/2 - i));
		var top = game.height - ingHeight * (1 + 0.05*(step)*(step));
		var left = xPos[i];

		var representation = new Ingredient(ingredient);
		var dragable = new Dragable([representation]);
		dragable.data = ingredient;

		dragable.position = new V2(0, 0);
		dragable.size = new V2(0, 0);
		
		dragable.setPosition(left, top);
		dragable.returnsToOrigin = true;

		ingredientObjects.push(dragable);
		this.ingredientMap[ingredient] = dragable;
		
		var dish = new ImageEntity('img/ui/opfergabe.png', new V2(left, top));
		this.entities.push(dish);
		
		var circle = new PlaceholderCircle(left + 20 + (i>=3?210:0), top + 40, 40, 'rgba(255, 255, 255, 0.6)');
		this.entities.push(circle);
		
		var text = new Text("0", new V2(left + 20 + (i>=3?210:0), top + 57));
		this.entities.push(text);
		this.counterMap[ingredient] = text;
				
		
		if(levelIngredients[ingredient] > 0) this.entities.push(dragable);
		
		i++;
	}
	
	var dropable = new Dropable([new Placeholder(0, 0, 600, 256, 'rgba(0,0,0,.5)')], ingredientObjects);
	dropable.setPosition((game.width-600)/2, game.height-256);
	dropable.onDrop = function(dragable) { self.handleDrop(dragable); };	
	this.entities.unshift(dropable);
	
	this.updateIngredients();
}

ThermoMix.prototype = new Entity();

ThermoMix.prototype.handleDrop = function(dragable) {
	this.levelIngredients[dragable.data]--;
	
	this.slots.push(dragable.data);
	var entity = new Ingredient(dragable.data, 0.5);
	entity.position = new V2(game.width/2 - 128*2.5 + 128*this.slots.length, game.height - 172);
	entity.deleteonclean = true;
	this.entities.push(entity);
				
	if(this.slots.length >= 3) {
		var found = false;
		for(var spellName in spells) {
			var spell = spells[spellName];
			if(spell.ingredients.sort().toString() == this.slots.sort().toString()) {
				this.levelScene.level.setSpell(spellName);
				found = true;
			}
		}
		if(!found) {
			// Restore items
			for(var i = 0; i < this.slots.length; i++) {
				this.levelIngredients[this.slots[i]]++;
			}
		}
		this.slots = [];
		this.entities = this.entities.filter(function(el){ return !el.deleteonclean });
	}	
	
	this.updateIngredients();
};

ThermoMix.prototype.addLoot = function(updates) {
	for(var ingredient in updates) {
		this.levelIngredients[ingredient] += updates[ingredient];
	}
	this.updateIngredients();
}

ThermoMix.prototype.updateIngredients = function(){
	for(var ingredient in this.levelIngredients) {
		var num = this.levelIngredients[ingredient];
		
		this.counterMap[ingredient].text = num+"";
		
		var search = this.ingredientMap[ingredient];
		if(num <= 0) {
			this.entities = this.entities.filter(function(en){ return en != search });
		} else {
			if(this.entities.filter(function(en){ en == search }).length == 0) {
				this.entities.push(search);
			}
		}
	}
	
}