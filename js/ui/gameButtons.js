g.add('img/ui/main_menu_button.png');
g.add('img/ui/main_menu_button_half.png');
g.add('img/ui/resize-button.png');
g.add('img/ui/back-button.png');

function GameButton( pos, caption, callback, scale ) {
	this.scale = scale || 1;
	this.position = pos;
	this.size = new V2(600*this.scale, 300*this.scale);

	this.entities = [
		this.img = new ImageEntity('img/ui/main_menu_button.png', null, this.scale),
		this.caption = new Text(caption, new V2(600*this.scale *.5, 300*this.scale*.58), (80*this.scale)+'px sans-serif', buttonColors.text )
	];

	this.onClick = function() {
		s.play('sound/button.mp3');
		callback();
	};

	this.update = function() {
		this.caption.color = this.getArea().inside(mouse) ?  buttonColorsHover.text : buttonColors.text;
	}
}

GameButton.prototype = new Entity();

function FlatButton( pos, caption, callback, scale ) {
	this.scale = scale || 1;
	this.position = pos;
	this.size = new V2(600*this.scale, 150*this.scale);

	this.entities = [
		this.img = new ImageEntity('img/ui/main_menu_button_half.png', null, this.scale),
		this.caption = new Text(caption, new V2(this.size.x*this.scale *.5, this.size.y*this.scale*.6), (60*this.scale)+'px sans-serif', buttonColors.text )
	];

	this.onClick = function() {
		s.play('sound/button.mp3');
		callback();
	};

	this.update = function() {
		this.caption.color = this.getArea().inside(mouse) ?  buttonColorsHover.text : buttonColors.text;
	}
}

FlatButton.prototype = new Entity();

function BackButton( scene ) {
	this.position = new V2(45, 45);
	this.size = new V2(80, 80);
	this.entities = [new ImageEntity('img/ui/back-button.png', new V2(0, 0))];

	this.onClick = function() {
		s.play('sound/button.mp3');
		game.scene = scene;
	}
}

BackButton.prototype = new Entity();

function FullscreenButton() {
	this.position = new V2(game.width-128, 45);
	this.size = new V2(80, 80);
	this.entities = [new ImageEntity('img/ui/resize-button.png', new V2(0, 0))];
}

FullscreenButton.prototype = new Entity();

FullscreenButton.prototype.onClick = function () {
	if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
		if (document.body.requestFullscreen) {
			document.body.requestFullscreen();
		} else if (document.body.msRequestFullscreen) {
			document.body.msRequestFullscreen();
		} else if (document.body.mozRequestFullScreen) {
			document.body.mozRequestFullScreen();
		} else if (document.body.webkitRequestFullscreen) {
			document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
};