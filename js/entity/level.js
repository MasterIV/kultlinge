g.add("img/platform/platform_dummy.png");

function Level(data) {
	var m = {w: 17, h: 10, t: 128};
	var canvas = document.createElement("canvas");
	canvas.width = m.w * m.t;
	canvas.height = m.h * m.t;

	var ctx = canvas.getContext("2d");
	for (var x = 0; x < m.w; x++)
		for (var y = 0; y < m.y; y++)
			if (data[x][y]) {
			}

}