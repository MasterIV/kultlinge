/* Image Button */
function Button(img, hover, x, y, callback, sound ) {
	this.img = new Sprite( img );
	this.hover = new Sprite( hover );
	this.sound = sound;
	this.position = new V2(x, y)
	this.size = new V2(this.img.width, this.img.height);
	this.callback = callback;
	this.x = x;
	this.y = y;
}

Button.prototype = new Entity;

Button.prototype.draw = function(ctx ) {
	if( this.hover &&  this.getArea().inside( mouse )) this.hover.draw( ctx, this.x, this.y );
	else this.img.draw( ctx, this.x, this.y );
}

/* Sprite Button */
function SpriteButton(img, position, spriteRect, hoverRect, callback, sound ) {
	this.img = new Sprite( img );
	this.position = position;
	this.spriteRect = spriteRect;
	this.hoverRect = hoverRect;
	this.sound = sound;
	this.size = new V2(this.spriteRect.width(), this.spriteRect.height());
	this.callback = callback;
}

SpriteButton.prototype = new Entity();

SpriteButton.prototype.draw = function(ctx ) {
	if( this.hover &&  this.getArea().inside( mouse )) {
		this.img.area( ctx,
				this.hoverRect.p1.x, this.hoverRect.p1.y, this.hoverRect.width(), this.hoverRect.height(),
				this.position.x, this.position.y);
	} else {
		this.img.area( ctx,
				this.spriteRect.p1.x, this.spriteRect.p1.y, this.spriteRect.width(), this.spriteRect.height(),
				this.position.x, this.position.y);
	}
};

/* Text Button */
function TextButton(text, x, y, w, h, colors, hover, sound ) {
	this.area = new Rect( new V2( x, y ), new V2( x+w, y+h));
	this.text = text;
	this.colors = colors;
	this.hover = hover;
	this.sound = sound;
}

TextButton.prototype.draw = function(ctx ) {
	var c = this.hover &&  this.area.inside( mouse ) ? this.hover : this.colors;

	ctx.fillStyle = c.background ? c.background : '#EEEEEE';
	ctx.fillRect( this.area.p1.x, this.area.p1.y, this.area.width(), this.area.height());

	ctx.strokeStyle = c.border ? c.border : 'black';
	ctx.strokeRect( this.area.p1.x, this.area.p1.y, this.area.width(), this.area.height());

	ctx.fillStyle = c.text ? c.text : 'black';
	ctx.fillText( this.text, this.area.p1.x, this.area.p1.y, this.area.width());
};

/* Shared Source */
TextButton.prototype.click =
Button.prototype.click =
SpriteButton.prototype.click = function( pos ) {
	if( this.getArea().inside( pos )) {
		if( this.sound ) sound.play(this.sound);
		if( this.callback ) this.callback();
	}
};
