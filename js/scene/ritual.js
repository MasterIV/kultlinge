function RitualScene() {	
	var drag1 = new Placeholder(10, 10, 100, 100, 'blue');
	var drag2 = new Placeholder(120, 10, 100, 100, 'red');
	var drag3 = new Placeholder(230, 10, 100, 100, 'green');
	var drop1 = new Placeholder(0, 0, 320, 100, 'yellow');

	var dragable = new Dragable([drag1, drag2, drag3]);
	var dropable = new Dropable([drop1], [dragable]);

	dragable.setPosition(10, 10);

	dropable.setPosition(10, 300);
	
	dropable.onDrop = function(dragable) { console.log(dragable); };	
	
	this.entities = [dropable, dragable];
	
	this.olderDraw = this.draw;
	this.draw = function(ctx ) {
		ctx.clearRect(0, 0, game.width, game.height);
		this.olderDraw( ctx );
	};
}

RitualScene.prototype = new Scene();