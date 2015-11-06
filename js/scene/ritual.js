function RitualScene() {
	this.entities = [
		new Placeholder(10, 10, 100, 40),
		new Placeholder(10, 60, 100, 40),
		new Placeholder(10, 110, 100, 40)
	];
}

RitualScene.prototype = new Scene();