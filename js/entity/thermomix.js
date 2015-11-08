g.add('img/ui/opfergabe.png');
g.add('img/ui/opferschale.png');
g.add('img/spells/poof_red.png');

function ThermoMix(levelIngredients, levelScene) {
	var self = this;

	this.levelIngredients = JSON.parse(JSON.stringify(levelIngredients));
	
	this.entities = [];
	this.levelScene = levelScene;
	this.slots = [];
	
	this.size = new V2(game.width, game.height);
	
	var xPos = [0.04, 0.15, 0.26, 0.63, 0.74, 0.85].map(function(x){ return x*game.width });
		
	var i = 0;
	this.ingredientMap = {};
	this.counterMap = {};
	for(var ingredient in levelIngredients) {
		var step = Math.floor(Math.abs((Object.keys(ingredients).length-1)/2 - i));
		var top = game.height - 256 * (1 + 0.05*(step)*(step));
		var left = xPos[i];

		var representation = new Ingredient(ingredient);
		representation.position = new V2(left, top);
		representation.size = new V2(256, 256);
		representation.onClick = function() {
			self.handleDrop({data: this.ingredient}); self.updateIngredients();
		}
		this.ingredientMap[ingredient] = representation;
		representation.ingredient = ingredient;
		
		
		var dish = new ImageEntity('img/ui/opfergabe.png', new V2(left, top));
		this.entities.push(dish);
		
		var circle = new PlaceholderCircle(left + 20 + (i>=3?210:0), top + 40, 40, 'rgba(255, 255, 255, 0.9)');
		this.entities.push(circle);
		
		var text = new Text("0", new V2(left + 20 + (i>=3?210:0), top + 57));
		this.entities.push(text);
		this.counterMap[ingredient] = text;
				
		
		if(levelIngredients[ingredient] > 0) {
			this.entities.push(representation);
		} 
		
		i++;
	}
	
	var opferschale = new ImageEntity('img/ui/opferschale.png', new V2(game.width/2-300, game.height-256));
	this.entities.unshift(opferschale);
	var dropable = new Placeholder(0, 0, 600, 256, 'rgba(0,0,0,0)');
	dropable.setPosition((game.width-600)/2, game.height-256);
	dropable.onClick = function() { 
		for(var i = 0; i < self.slots.length; i++) {
			self.levelIngredients[self.slots[i]]++;
		}
		self.slots = []; 
		self.entities = self.entities.filter(function(el){ return !el.deleteonclean });
		self.updateIngredients();
	}
	this.entities.unshift(dropable);
	
	this.updateIngredients();
}

ThermoMix.prototype = new Entity();

ThermoMix.prototype.handleDrop = function(dragable) {
	this.levelIngredients[dragable.data]--;
	
	this.slots.push(dragable.data);
	var entity = new Ingredient(dragable.data, 0.5);
	entity.position = new V2(game.width/2 - 150*2.5 + 150*this.slots.length, game.height - 200);
	entity.deleteonclean = true;
	this.entities.push(entity);
	
	s.play('sound/thermo-drop.mp3');
				
	if(this.slots.length >= 3) {
		var found = false;
		for(var spellName in spells) {
			var spell = spells[spellName];
			if(spell.ingredients.sort().toString() == this.slots.sort().toString()) {
				this.levelScene.level.setSpell(spellName);

				s.play('sound/thermomix.mp3');				
				found = true;
			}
		}
		if(!found) {
			// Restore items
			for(var i = 0; i < this.slots.length; i++) {
				this.levelIngredients[this.slots[i]]++;
			}
		}
		
		for(var i = 1; i <= 3; i++) {
			this.entities.push( new Animation('img/spells/poof'+(found?'':'_red')+'.png', new V2(game.width/2 - 150*2.5 + 150*i + 10, game.height - 250), 5, 100, this ));
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
			var found = this.entities.filter(function(en){ return en.ingredient == ingredient });
			if(found.length == 0) {
				this.entities.push(search);
			}
		}
	}
	
}