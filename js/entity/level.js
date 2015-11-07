g.add("img/level/platform_dummy.png");
g.add("img/level/ladder_dummy.png");

function Level(data) {
	var m = {w: 17, h: 10, t: 128};
	var self = this;

	this.position = new V2(48, 0);
	this.size = new V2(m.w * m.t, m.h * m.t);

	var canvas = document.createElement("canvas");
	canvas.width = this.size.x;
	canvas.height = this.size.y;

	var ctx = canvas.getContext("2d");
	var imgLadder = g["img/level/ladder_dummy.png"];
	var imgPlatform = g["img/level/platform_dummy.png"];
	var imgFrames = Math.floor( imgPlatform.width / m.t );

	function placeTile( x, y, f ) {
		ctx.drawImage(imgPlatform, f*m.t, 0, m.t, m.t, x*m.t, y*m.t, m.t, m.t );
	}

	for (var x = 0; x < m.w; x++)
		for (var y = 0; y < m.h; y++) {
			if (data[x][y].p) {
				var t = 0;

				if (x < 1 || data[x - 1][y].p) t += 2;
				if (x > m.w - 2 || data[x + 1][y].p) t += 1;

				if (t == 1) placeTile(x, y, 0);
				else if (t == 2) placeTile(x, y, imgFrames - 1);
				else placeTile(x, y, rand(1, imgFrames - 2));
			}

			if (data[x][y].e == 'ladder') {
				ctx.drawImage(imgLadder, x * m.t, y * m.t);
			}
		}

	this.entities = [{
		draw: function(ctx) { ctx.drawImage( canvas, 0, 0 );}
	}];
}

Level.prototype = new Entity();