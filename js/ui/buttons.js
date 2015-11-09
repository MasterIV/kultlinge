/* Image Button */
function Button(img, hover, x, y, callback, sound ) {
	this.img = new Sprite( img );
	this.hover = new Sprite( hover );
	this.sound = sound;
	this.position = new V2(x, y);
	this.size = new V2(this.img.width, this.img.height);
	this.callback = callback;
	this.x = x;
	this.y = y;
}

Button.prototype = new Entity;

Button.prototype.draw = function(ctx ) {
	if( this.hover &&  this.getArea().inside( mouse )) this.hover.draw( ctx, this.x, this.y );
	else this.img.draw( ctx, this.x, this.y );
};

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
function TextButton(text, pos, size, colors, callback, hover, sound, font ) {
	this.position = pos;
	this.size = size;
	this.text = text;
	this.colors = colors;
	this.hover = hover;
	this.sound = sound;
	this.callback = callback;
	this.font = font || '50px sans-serif';
}

TextButton.prototype = new Entity();

TextButton.prototype.draw = function(ctx ) {
	var c = this.hover &&  this.getArea().inside( mouse ) ? this.hover : this.colors;

	ctx.fillStyle = c.background ? c.background : '#EEEEEE';
	ctx.fillRect( this.getArea().p1.x, this.getArea().p1.y, this.getArea().width(), this.getArea().height());

	ctx.strokeStyle = c.border ? c.border : 'black';
	ctx.strokeRect( this.getArea().p1.x, this.getArea().p1.y, this.getArea().width(), this.getArea().height());

	ctx.fillStyle = c.text ? c.text : 'black';
	ctx.textAlign = 'center';
	ctx.font = this.font;
	ctx.textBaseline = 'middle';
	ctx.fillText( this.text, this.getArea().p1.x + this.getArea().width() / 2, this.getArea().p1.y + this.getArea().height() / 2, this.getArea().width());
};

/* Shared Source */
TextButton.prototype.click =
Button.prototype.click =
SpriteButton.prototype.click = function( pos ) {
	if( this.getArea().inside( pos )) {
		if( this.sound ) s.play(this.sound);
		if( this.callback ) this.callback();
	}
};
