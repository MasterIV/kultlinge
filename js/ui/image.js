function ImageEntity( img, pos ) {
	this.draw = function( ctx ) {
		ctx.drawImage( g[img], pos.x, pos.y );
	}
}
