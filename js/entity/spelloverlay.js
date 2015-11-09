function SpellOverlay(pos, spell, maxChars) {
	var spell = spells[spell];

	this.position = pos;
	this.size = new V2(950, 530);

	this.heading = new Text(spell.name, new V2(this.size.x/2, 120));
	this.heading.font = '120px "Bones"';
	this.heading.color = headingColor;

	this.entities = [new ImageEntity('img/ui/spellbook.png'), this.heading];

	for( var i in spell.ingredients ) {
		var ingredient = new Ingredient(spell.ingredients[i], 0.8);
		ingredient.position = new V2(256*i + 110, 150);
		this.entities.push(ingredient);
	}

	var descriptionLines = Text.wordwrap(spell.description, maxChars || 50);
	for(var i = 0; i < descriptionLines.length; i++) {
		var desc = new Text(descriptionLines[i], new V2(this.size.x/2,420+i*50), '40px sans-serif', '#222' );
		this.entities.push(desc);
	}
}

SpellOverlay.prototype = new Entity();