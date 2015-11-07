function MapScene() {
	this.entities = [new Level(levels[0].map)];
}

MapScene.prototype = new Scene();