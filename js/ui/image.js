function ImageEntity( img, pos ) {
	this.draw = function( ctx ) {
		ctx.drawImage( g[img], pos.x, pos.y );
	}
}

function AnimatedImage( img, pos,  frames, speed) {
	this.conuter = new Framecounter(speed);
	this.sprite = new AnimationSprite(img, frames);

	this.update = function(d) { this.conuter.update(d); }
	this.draw = function(ctx) { this.sprite.draw( ctx, pos.x, pos.y, this.conuter.frame % frames ); }
}

function Animation( img, pos, frames, speed, parent) {
	this.conuter = new Framecounter(speed);
	this.sprite = new AnimationSprite(img, frames);

	this.update = function(d) {
		this.conuter.update(d);
		if(this.conuter.frame>=frames)
			arrayRemove( parent.entities, this );
	};

	this.draw = function(ctx) { this.sprite.draw( ctx, pos.x, pos.y, this.conuter.frame ); }
}

