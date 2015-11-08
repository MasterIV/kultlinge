g.add('img/kultling.png');
g.add('img/kultling_m.png');
g.add('img/kultling_tot.png');
g.add('img/kultling_fire.png');
g.add('img/explosion.png');

function Kultling( parent ) {
	this.level = parent;
	this.grid = parent.start;
	this.entering = parent.start;

	this.position = this.grid.prd(m.t);
	this.sprite = new AnimationSprite('img/kultling.png', 4);
	this.spriteM = new AnimationSprite('img/kultling_m.png', 4);
	this.spriteB = new AnimationSprite('img/kultling_fire.png', 2);
	this.counter = new Framecounter(200);

	this.speed = 180;
	this.speedLadder = 90;
	this.horizontal = this.speed;
	this.vertical = 0;

	this.falling = false;
	this.burning = false;
	this.ttl = false;
}

Kultling.prototype.draw = function( ctx ) {
	if( this.burning ) this.spriteB.draw(ctx, this.position.x, this.position.y, this.counter.frame % 2);
	if( this.horizontal < 0 ) this.spriteM.draw(ctx, this.position.x, this.position.y, this.counter.frame % 4);
	else this.sprite.draw(ctx, this.position.x, this.position.y, this.counter.frame % 4);
};

Kultling.prototype.click = function(pos) {
	var area = new Rect(this.position, this.position.sum( new V2(m.t, m.t)));
	if( area.inside( pos )) {
		if( this.level.consumeSpell('burn')) {
			this.burning = true;
			this.ttl = 1200;
			this.speed *= 1.5;
			this.horizontal *= 1.5;
		}

		if( this.level.consumeSpell('detonate')) {
			this.die();
			this.level.entities.push(new Animation('img/explosion.png', this.position.dif(new V2(64, 64)), 16, 100, this.level ));

			for( x = this.entering.x -1; x < this.entering.x+2; x++)
				if( x >= 0 && x < m.w ) {
					var current = this.level.getTile( x, this.entering.y);
					if( current && current.detonate )
						current.detonate();
				}
		}
	}
};

Kultling.prototype.update = function( delta ) {
	if( this.burning ) {
		this.ttl -= delta;
		if( this.ttl < 0 )
			this.die();
	}

	this.counter.update( delta );
	this.position.x += ( this.horizontal / 1000 ) * delta;
	this.position.y += ( this.vertical / 1000 ) * delta;

	var dg = this.grid.prd(m.t).dif( this.position );
	if( Math.abs(dg.x) > m.t || Math.abs(dg.y) > m.t ) {
		this.grid = this.position.clone();
		this.grid.grid(m.t, m.t);
		this.tileReached();
	}

	var de = this.entering.prd(m.t).dif( this.position );
	if( Math.abs(de.x) > m.t/2 || Math.abs(de.y) > m.t/2 ) {
		this.entering = this.position.clone();
		this.entering.grid(m.t, m.t);
		this.tileEntered();
	}
};

Kultling.prototype.die = function() {
	s.play('sound/death.mp3');
	arrayRemove( this.level.entities, this );
	this.level.entities.push( new Animation('img/kultling_tot.png', this.position, 6, 120, this.level));
	this.level.killKultling();
};

Kultling.prototype.sacrifice = function() {
	s.play('sound/death2.mp3');
	arrayRemove( this.level.entities, this );
	this.level.entities.push( new Animation('img/kultling_tot.png', this.position, 6, 120, this.level));
	this.level.sacrificeKultling();
};

Kultling.prototype.tileEntered = function() {
	var current = this.level.getTile( this.entering.x, this.entering.y);
	if( current && current.onKultistTouch )
		current.onKultistTouch( this );

	var below = this.level.getTile( this.entering.x, this.entering.y+1);
	if( below && below.onKultistTouchBelow )
		below.onKultistTouchBelow( this );
};

Kultling.prototype.tileReached = function() {
	if( this.grid.x < 0 || this.grid.x > m.w-1 ) this.die();
	if( this.grid.y < 0 || this.grid.y > m.h-1 ) this.die();

	var current = this.level.getTile( this.grid.x, this.grid.y);
	var below = this.level.getTile( this.grid.x, this.grid.y+1);

	if( this.falling ) {
		if( below ) return this.die();
	} else if( current == 'goal' ) {
		return this.sacrifice();
	} else if( this.vertical ) {
		if( below == 'platform' || ( current != 'ladder_up' && current != 'ladder_down' ) ) {
			this.vertical = 0;
			this.horizontal = this.speed;
		}
	} else {
		if( current == 'ladder_up' ) {
			this.horizontal = 0;
			this.vertical = -this.speedLadder;
		} else if( below == 'ladder_down' ) {
			this.horizontal = 0;
			this.vertical = this.speedLadder;
		} else if( !below ) {
			this.horizontal = 0;
			this.vertical = 200;
			this.falling = true;
		}
	}

	if( current && current.onKultistCollision )
		current.onKultistCollision( this );
	if( below && below.onKultistCollisionBelow )
		below.onKultistCollisionBelow( this );
};



