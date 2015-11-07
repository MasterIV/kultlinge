function RitualScene() {
	var self = this;
	
	var ingredients = [
		{ img:"img", type:"rabbit" },
		{ img:"img", type:"chicken" },
		{ img:"img", type:"rosencole" }, 
		{ img:"img", type:"crowdsalat" }, 
		{ img:"img", type:"tobi" }, 
		{ img:"img", type:"rabbit" }
	];
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
	for(var i = 0; i < ingredients.length; i++) {
		var ingredient = ingredients[i];
		var representation = new Placeholder(0, 0, 176, 176, 'blue');
		representation.data = ingredient;
		var dragable = new Dragable([representation]);
		dragable.position = positions[i];
		dragable.inheritSize();
		dragable.returnsToOrigin = true;

		ingredientObjects.push(dragable);
		this.entities.push(dragable);
	}
	
	var dropable = new Dropable([new Placeholder(0, 0, 400, 176, 'red')], ingredientObjects);
	dropable.setPosition((game.width-400)/2, game.height-176);
	
	dropable.onDrop = function(dragable) { console.log(dragable); };	
	
	this.entities.unshift(dropable);
	this.entities.unshift(scenes.map);	
	
	var spellOverlay = new SpellOverlay("frost", true);
	spellOverlay.setPosition(600, 300);
	spellOverlay.setSize(this.getArea().width()-1200, this.getArea().height()-600);
	this.entities.push(spellOverlay);
	
	var goButton = new Placeholder();
	goButton.color = "black";
	goButton.setPosition(800, 220);
	goButton.setPosition(spellOverlay.position.x + spellOverlay.getArea().width()/2 - 150, spellOverlay.position.y + spellOverlay.getArea().height() - 150);
	goButton.setSize(300, 100);
	this.entities.push(goButton);
		
	this.olderDraw = this.draw;
	this.draw = function(ctx ) {
		ctx.clearRect(0, 0, game.width, game.height);
		this.olderDraw( ctx );
	};
}

RitualScene.prototype = new Scene();