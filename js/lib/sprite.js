function Sprite(img ) {
	this.img = g[img];
	this.width = this.img.width;
	this.height = this.img.height;
}

Sprite.prototype.draw = function(ctx, x, y ) {
	ctx.drawImage( this.img, x, y );
};

Sprite.prototype.drawScaled = function(ctx, x, y, scale){
	ctx.drawImage( this.img, x, y, this.img.width*scale, this.img.height*scale);
};

Sprite.prototype.center = function(ctx, x, y ) {
	ctx.drawImage( this.img, x-this.img.width/2, y-this.img.height/2 );
};

Sprite.prototype.area = function(ctx, sx, sy, sw, sh, x, y, s ) {
	var scale = s || 1
	ctx.drawImage( this.img, sx, sy, sw, sh, x, y, sw*scale, sh*scale );
};

function AnimationSprite(img, frames ) {
	this.img = g[img];
	this.h = g[img].height;
	this.w = g[img].width / frames;
	this.f = frames;
}

AnimationSprite.prototype.draw = function(ctx, x, y, f ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x, y, this.w, this.h );
};

AnimationSprite.prototype.center = function(ctx, x, y, f ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x-this.w/2, y-this.h/2, this.w, this.h );
};

AnimationSprite.prototype.drawScaled = function(ctx, x, y, f, scale){
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x, y, this.w*scale, this.h*scale );
};
