function Text(text, position, font, color, align) {
	this.text = text;
	this.position = position;
	this.size = new V2(game.width, 50);
	this.align = align || 'center';
	this.color = color || 'black';
	this.font = font || '50px sans-serif';
}

Text.prototype = new Entity();

Text.prototype.draw = function(ctx) {
	var oldFont = ctx.font;
	ctx.fillStyle = this.color;
	ctx.font = this.font;
	ctx.textAlign = this.align;
	ctx.fillText(this.text, this.position.x, this.position.y, this.getArea().width());
	ctx.font = oldFont;
};

Text.prototype.wordwrap = function(text, maxLength){
	var words = text.split(' ');
	
	var lines = [];
	var buffer = [];
	length = 0;
	for(var i = 0; i < words.length; i++) {
		word = words[i];
		var wordLength = word.length;
		if(length + wordLength > maxLength) {
			lines.push(buffer.join(" "));
			buffer = [];
			length = 0;
		}
		buffer.push(word);
		length += wordLength + 1;
	}
	lines.push(buffer.join(" "));
	
	return lines;
}