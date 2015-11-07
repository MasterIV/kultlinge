function Obstacle() {}
Obstacle.prototype = new Entity;

Obstacle.prototype.assign = function(o, level, x, y, img) {
	this.map = new V2( x, y );
	this.position = new V2(x* m.t, y* m.t);
	this.size = new V2( 128, 128 );
	this.sprite = new Sprite(img);
	this.level = level;
};

Obstacle.prototype.draw = function(ctx) {
	this.sprite.draw( ctx, this.position.x, this.position.y );
};

Obstacle.prototype.remove = function() {
	this.level.map[this.map.x][this.map.y] = null;
	arrayRemove(this.level.entities, this);
};


// =================================================================== //

g.add('img/obstacles/fire.png');
function Fire(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/fire.png');
}

Fire.prototype = new Obstacle();

Fire.prototype.onKultistTouch = function(kultling) {
	kultling.die();
};

Fire.prototype.onClick = function() {
	if( this.level.consumeSpell('rain')) {
		this.remove();
	}
};

// =================================================================== //

g.add('img/obstacles/thorns.png');
function Thorns(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/thorns.png');
}

Thorns.prototype = new Obstacle();

Thorns.prototype.onKultistTouch = function(kultling) {
	if( kultling.burning ) this.remove();
	else kultling.die();
};

// =================================================================== //

g.add('img/obstacles/water.png');
function Water(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/water.png');
}

Water.prototype = new Obstacle();

Water.prototype.onKultistTouchBelow = function(kultling) {
	kultling.horizontal = -kultling.horizontal;
};

Water.prototype.onKultistCollisionBelow = function(kultling) {
	kultling.die();
};

// =================================================================== //

g.add('img/obstacles/stone.png');
function Stone(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/stone.png');
}
Stone.prototype = new Obstacle();

Stone.prototype.onKultistTouch = function(kultling) {
	kultling.horizontal = -kultling.horizontal;
};

// =================================================================== //

g.add('img/obstacles/rock.png');
function Rock(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/rock.png');
}

Rock.prototype = new Obstacle();

Rock.prototype.onKultistTouch = function(kultling) {
	kultling.horizontal = -kultling.horizontal;
};

// =================================================================== //

g.add('img/obstacles/saw.png');
function Saw(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/saw.png');
}

Saw.prototype = new Obstacle();

Saw.prototype.onKultistTouch = function(kultling) {
	kultling.die();
};

// =================================================================== //

g.add('img/obstacles/chest_closed.png');
g.add('img/obstacles/chest_open.png');
function Chest(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/chest_closed.png');
	this.closed = true;
}

Chest.prototype = new Obstacle();

Chest.prototype.onKultistTouch = function(kultling) {
	if( this.closed ) {
		this.closed = false;
		this.sprite = new Sprite('img/obstacles/chest_open.png');
	}
};
