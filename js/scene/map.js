function MapScene() {
	this.entities = [{
		draw: function(ctx) {
			ctx.fillColor = 'black';
			ctx.fillText('Hello World', 100, 100 );
		}
	}];
}

MapScene.prototype = new Scene();