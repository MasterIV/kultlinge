g.add('img/kultling.png');

function Kultling( parent ) {
	this.level = parent;
	this.grid = parent.start;

	this.position = this.grid.prd(m.t);
	this.sprite = new Sprite('img/kultling.png');

	this.speed = 60;
	this.horizontal = this.speed;
	this.vertical = 0;
	this.falling = false;

}

Kultling.prototype.draw = function( ctx ) {
	this.sprite.draw(ctx, this.position.x, this.position.y);
};

Kultling.prototype.update = function( delta ) {
	this.position.x += ( this.horizontal ) / delta;
	this.position.y += ( this.vertical ) / delta;

	var d = this.grid.prd(m.t).dif( this.position );
	if( Math.abs(d.x) > m.t || Math.abs(d.y) > m.t ) {
		this.grid = this.position.clone();
		this.grid.grid(m.t, m.t);
		this.tileReached();
	}
};

Kultling.prototype.die = function() {
	console.log( 'toooooooot' );
	arrayRemove( this.level.entities, this );
};

Kultling.prototype.tileReached = function() {
	if( this.grid.x < 0 || this.grid.x > m.w-1 ) this.die();
	if( this.grid.y < 0 || this.grid.y > m.h-1 ) this.die();

	var current = this.level.getTile( this.grid.x, this.grid.y);
	var below = this.level.getTile( this.grid.x, this.grid.y+1);

	if( this.falling ) {
		if( below ) this.die();
	} else if( current == 'goal' ) {
		console.log( 'victory' );
		this.die();
	} else if( this.vertical ) {
		if( below == 'platform' || !current ) {
			this.vertical = 0;
			this.horizontal = this.speed;
		}
	} else {
		if( current == 'ladder' ) {
			this.horizontal = 0;
			this.vertical = -40;
		} else if( below == 'ladder' ) {
			this.horizontal = 0;
			this.vertical = 40;
		} else if( !below ) {
			console.log( this, current, below );
			this.horizontal = 0;
			this.vertical = 200;
			this.falling = true;
		}
	}
};



