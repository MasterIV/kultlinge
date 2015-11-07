g.add("img/level/platform_dummy.png");
g.add("img/level/ladder_dummy.png");
g.add("img/altar.png");
g.add("img/spawn.png");

function Level( level, parent ) {
	var self = this;
	var data = level.map;
	var spawn = level.spawnNumber;

	var cooldown = 0;
	var killed = 0;
	var sacrificed = 0;

	this.map = [];
	this.spell = null;

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

	function checkLevelComplete() {
		if( killed + sacrificed >=  level.spawnNumber ) {
			var stars = ( sacrificed >= level.bronze ) + ( sacrificed >= level.silver ) + ( sacrificed >= level.gold );
			parent.blocking = [new FinishedOverlay( stars, parent.i )];
		}
	}

	this.killKultling = function() {
		killed++;
		checkLevelComplete();
	};

	this.sacrificeKultling = function() {
		sacrificed++;
		checkLevelComplete();
	};

	this.getTile = function( x, y ) {
		if( x < 0 || x > m.w-1 || y < 0 || y > m.h-1 ) return null;
		return this.map[x][y];
	};

	this.setSpell = function( spell ) {
		console.log( spell );
		this.spell = spell;
	};

	this.consumeSpell = function( spell ) {
		if( spell == this.spell ) {
			this.spell = null;
			return true;
		}

		return false;
	};

	this.entities = [{
		draw: function(ctx) { ctx.drawImage( canvas, 0, 0 ); },
		update: function(delta) {
			if( spawn ) {
				cooldown -= delta;
				if (cooldown < 0) {
					self.entities.push(new Kultling(self));
					cooldown = level.spawnRate;
					spawn--;
				}
			}
		}
	}];


	// Generate map images and convert entities
	for (var x = 0; x < m.w; x++) {
		this.map[x] = [];

		for (var y = 0; y < m.h; y++) {
			//ctx.strokeRect(x * m.t, y * m.t, m.t, m.t );
			this.map[x][y] = null;

			if (data[x][y].p) {
				this.map[x][y] = "platform";
				var t = 0;

				if (x < 1 || data[x - 1][y].p) t += 2;
				if (x > m.w - 2 || data[x + 1][y].p) t += 1;

				if (t == 1) placeTile(x, y, 0);
				else if (t == 2) placeTile(x, y, imgFrames - 1);
				else placeTile(x, y, rand(1, imgFrames - 2));
			}

			switch( data[x][y].e ) {
				case 'ladder': ctx.drawImage(imgLadder, x * m.t, y * m.t); this.map[x][y] = 'ladder'; break;
				case 'start': this.start = new V2(x, y); break;
				case 'goal': this.goal = new V2(x, y); this.map[x][y] = 'goal'; break;
				case 'fire': this.entities.push( this.map[x][y] = new Fire( self, x, y )); break;
				case 'water': this.entities.push( this.map[x][y] = new Water( self, x, y )); break;
				case 'stone': this.entities.push( this.map[x][y] = new Stone( self, x, y )); break;
				case 'thorns': this.entities.push( this.map[x][y] = new Thorns( self, x, y )); break;
				case 'saw': this.entities.push( this.map[x][y] = new Saw( self, x, y )); break;
				case 'rock': this.entities.push( this.map[x][y] = new Rock( self, x, y )); break;
				case 'chest': this.entities.push( this.map[x][y] = new Chest( self, x, y )); break;
			}
		}
	}

	// display start and goal
	this.entities.push(new AnimatedImage("img/altar.png", this.goal.prd(m.t), 3, 200));
	this.entities.push(new ImageEntity("img/spawn.png", this.start.prd(m.t) ));
}

Level.prototype = new Entity();