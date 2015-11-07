function MapScene() {
	this.entities = [new Level(levels[0])];
}

MapScene.prototype = new Scene();