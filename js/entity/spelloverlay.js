g.add('img/ui/spellbook.png');
g.add('img/ui/victory_overlay.png');


function SpellOverlay(pos, spell, maxChars, button) {
	var spell = spells[spell];

	this.position = pos;
	this.size = button ? new V2(1600, 800) : new V2(950, 530);

	this.heading = new Text(spell.name, new V2(this.size.x/2, button ? 160 : 120));
	this.heading.font = button ? '160px "Bones"' : '120px "Bones"';
	this.heading.color = headingColor;

	this.entities = [new ImageEntity(button ? 'img/ui/victory_overlay.png' : 'img/ui/spellbook.png'), this.heading];

	for( var i in spell.ingredients ) {
		var ingredient = new Ingredient(spell.ingredients[i],  0.8);
		ingredient.position = new V2(256*i + (this.size.x-717)/2, button ?  220 : 150);
		this.entities.push(ingredient);
	}

	var descriptionLines = Text.wordwrap(spell.description, maxChars || 50);
	for(var i = 0; i < descriptionLines.length; i++) {
		var desc = new Text(descriptionLines[i], new V2(this.size.x/2,(button ? 500:420)+i*50), '45px sans-serif', '#222' );
		this.entities.push(desc);
	}

	if( button ) this.entities.push(button);
}

SpellOverlay.prototype = new Entity();