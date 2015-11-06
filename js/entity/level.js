g.add("img/platform/platform_dummy.png");

function Level(data) {
	var m = {w: 17, h: 10, t: 128};

	this.position = new V2(0, 0);
	this.size = new V2(m.w * m.t, m.h * m.t);
	this.entities = [];

	var canvas = document.createElement("canvas");
	canvas.width = this.size.x;
	canvas.height = this.size.y;

	var ctx = canvas.getContext("2d");
	for (var x = 0; x < m.w; x++)
		for (var y = 0; y < m.y; y++)
			if (data[x][y]) {
			}

}

Level.prototype = new Entity();