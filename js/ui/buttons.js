/* Image Button */
function Button(img, hover, x, y, callback, sound ) {
	this.img = new Sprite( img );
	this.hover = new Sprite( hover );
	this.sound = sound;
	this.area = new Rect( new V2( x, y ), new V2( x+this.img.width, y+this.img.height ));
	this.callback = callback;
	this.x = x;
	this.y = y;
}

Button.prototype.draw = function(ctx ) {
	if( this.hover &&  this.area.inside( mouse )) this.hover.draw( ctx, this.x, this.y );
	else this.img.draw( ctx, this.x, this.y );
}

/* Sprite Button */

function SpriteButton(img, position, hover, x, y, callback, sound ) {
	this.img = new Sprite( img );
	this.position = position;
	this.hover = hover;
	this.sound = sound;
	this.area = new Rect( new V2( x, y ), new V2( x+position.width(), y+position.height()));
	this.callback = callback;
	this.x = x;
	this.y = y;
}

SpriteButton.prototype.draw = function(ctx ) {
	if( this.hover &&  this.area.inside( mouse )) {
		this.img.draw( ctx,
				this.hover.p1.x, this.hover.p1.y, this.hover.width(), this.hover.height(),
				this.x, this.y, this.hover.width(), this.hover.height());
	} else {
		this.img.draw( ctx,
				this.position.p1.x, this.position.p1.y, this.position.width(), this.position.height(),
				this.x, this.y, this.position.width(), this.position.height());
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
SpriteButton.prototype.click = function(pos ) {
	if( this.area.inside( pos )) {
		if( this.sound ) sound.play(this.sound);
		this.callback();
	}
};
