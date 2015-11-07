function Ingredient(ingredient, scale) {
	scale = scale || 1;
	
	var ingredient = ingredients[ingredient];
	
	this.sprite = new Sprite(ingredient.img);
	this.setSize(this.sprite.img.width*scale, this.sprite.img.height*scale);
	
	this.__draw = this.draw;
	this.draw = function(ctx) {
		this.__draw(ctx);
		
		var area = this.getArea();
		this.sprite.drawScaled(ctx, area.p1.x, area.p1.y, scale);
	}
}

Ingredient.prototype = new Entity();
Ingredient.prototype.constructor = Ingredient;