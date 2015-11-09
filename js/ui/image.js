function ImageEntity( img, pos, scale ) {
	this.position = pos || new V2(0,0);
	this.scale = scale ||  1;
	this.w = g[img].width;
	this.h = g[img].height;

	this.draw = function( ctx ) {
		ctx.drawImage( g[img], 0, 0, this.w, this.h, this.position.x, this.position.y, this.w*this.scale, this.h*this.scale );
	}
}

function AnimatedImage( img, pos,  frames, speed) {
	this.conuter = new Framecounter(speed);
	this.sprite = new AnimationSprite(img, frames);
	this.visible = true;
	this.scale = 1;

	this.update = function(d) { if( !this.visible ) return; this.conuter.update(d); };
	this.draw = function(ctx) {
		if( !this.visible ) return;
		this.sprite.drawScaled( ctx, pos.x, pos.y, this.conuter.frame % frames, this.scale );
	};
}

function Animation( img, pos, frames, speed, parent) {
	this.conuter = new Framecounter(speed);
	this.sprite = new AnimationSprite(img, frames);

	this.update = function(d) {
		this.conuter.update(d);
		if(this.conuter.frame>=frames)
			arrayRemove( parent.entities, this );
	};

	this.draw = function(ctx) {
		this.sprite.draw( ctx, pos.x, pos.y, this.conuter.frame );
	}
}

