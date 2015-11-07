g.add('img/obstacles/fire.png');
g.add('img/obstacles/water.png');

function Obstacle() {}

Obstacle.prototype.assign = function(o, level, x, y, img) {
	this.map = new V2( x, y );
	this.position = new V2(x* m.t, y* m.t);
	this.sprite = new Sprite(img);
	this.level = level;
};

Obstacle.prototype.draw = function(ctx) {
	this.sprite.draw( ctx, this.position.x, this.position.y );
};

Obstacle.prototype.remove = function(tile) {
	this.level.map[this.map.x][this.map.y] = null;
	arrayRemove(this.level.entities, this);
};

// =================================================================== //

function Fire(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/fire.png')
}

Fire.prototype = new Obstacle();

Fire.prototype.onKultistTouch = function(kultling) {
	kultling.die();
};

// =================================================================== //

function Thorns(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/fire.png')
}

Thorns.prototype = new Obstacle();

Thorns.prototype.onKultistTouch = function(kultling) {
	kultling.die();
};

// =================================================================== //

function Water(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/water.png')
}

Water.prototype = new Obstacle();

Water.prototype.onKultistTouchBelow = function(kultling) {
	kultling.horizontal = -kultling.horizontal;
};

Water.prototype.onKultistCollisionBelow = function(kultling) {
	kultling.die();
};

// =================================================================== //

function Stone(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/fire.png')
}

Stone.prototype = new Obstacle();

Stone.prototype.onKultistTouch = function(kultling) {
	kultling.horizontal = -kultling.horizontal;
};

// =================================================================== //

function Rock(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/fire.png')
}

Rock.prototype = new Obstacle();

Rock.prototype.onKultistTouch = function(kultling) {
	kultling.horizontal = -kultling.horizontal;
};

// =================================================================== //

function Saw(level, x, y) {
	this.assign(this, level, x, y, 'img/obstacles/fire.png')
}

Saw.prototype = new Obstacle();

Saw.prototype.onKultistTouch = function(kultling) {
	kultling.die();
};
