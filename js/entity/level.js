g.add("img/level/platform_dummy.png");
g.add("img/level/ladder_dummy.png");
g.add("img/altar.png");
g.add("img/spawn.png");

function Level( level ) {
	var self = this;
	var data = level.map;

	this.position = new V2(48, 0);
	this.size = new V2(m.w * m.t, m.h * m.t);

	this.start = new V2(0, 0);
	this.goal  = new V2(0, 0);

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

	this.getTile = function( x, y ) {
		if( x < 0 || x > m.w-1 || y < 0 || y > m.h-1 ) return null;
		if( data[x][y].e ) return data[x][y].e;
		return data[x][y].p ? 'platform' : null;
	};

	for (var x = 0; x < m.w; x++)
		for (var y = 0; y < m.h; y++) {
			ctx.strokeRect(x * m.t, y * m.t, m.t, m.t );

			if (data[x][y].p) {
				var t = 0;

				if (x < 1 || data[x - 1][y].p) t += 2;
				if (x > m.w - 2 || data[x + 1][y].p) t += 1;

				if (t == 1) placeTile(x, y, 0);
				else if (t == 2) placeTile(x, y, imgFrames - 1);
				else placeTile(x, y, rand(1, imgFrames - 2));
			}

			switch( data[x][y].e ) {
				case 'ladder': ctx.drawImage(imgLadder, x * m.t, y * m.t); break;
				case 'start': this.start = new V2(x, y); break;
				case 'goal': this.goal = new V2(x, y); break;
			}
		}

	var cooldown = 0;

	this.entities = [{
		draw: function(ctx) {
			ctx.clearRect(0, 0, self.size.x, self.size.y);
			ctx.drawImage( canvas, 0, 0 );
		},

		update: function(delta) {
			cooldown -= delta;
			if( cooldown < 0 ) {
				self.entities.push( new Kultling( self ));
				cooldown = level.spawnRate;
			}
		}
	}];

	this.entities.push(new ImageEntity("img/altar.png", this.goal.prd(m.t)));
	this.entities.push(new ImageEntity("img/spawn.png", this.start.prd(m.t)));
}

Level.prototype = new Entity();