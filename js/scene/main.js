g.add('img/ui/menu.png');
g.add('img/ui/fullscreen.png');
g.add('img/ui/resize-button.png');

function MainScene() {
	var self = this;
	
	this.bg = new Sprite("img/ui/menu.png");
	
	var buttonBgs = [
		new AnimatedImage('img/ui/main_menu_button.png', new V2(140, 850), 1, 10000),
		new AnimatedImage('img/ui/main_menu_button.png', new V2(840, 850), 1, 10000),
		new AnimatedImage('img/ui/main_menu_button.png', new V2(1540, 850), 1, 10000),
	];
		
	this.entities = [
		buttonBgs[0], buttonBgs[1], buttonBgs[2],
		new TextButton(
			"Start", 
			new V2(game.width/2 - 1000, 850), 
			new V2(600, 300), 
			buttonColors, 
			function() {
				backgroundsound.play('sound/bg2.mp3');
				game.scene = scenes.levelselection;
			},
			buttonColorsHover,
			'sound/button.mp3',
			'80px sans-serif'
		),
		new TextButton(
			"Spellbook", 
			new V2(game.width/2 - 300, 850), 
			new V2(600, 300), 
			buttonColors, 
			function() {
				game.scene = scenes.spellbook;
			},
			buttonColorsHover,
			'sound/button.mp3',
			'80px sans-serif'
		),
		new TextButton(
			"Credits", 
			new V2(game.width/2 +400, 850), 
			new V2(600, 300), 
			buttonColors, 
			function() {
				game.scene = scenes.credits;
			},
			buttonColorsHover,
			'sound/button.mp3',
			'80px sans-serif'
		),
		];	
		
	
	this.entities.push(new AnimatedImage('img/ui/resize-button.png', new V2(game.width-128, 45), 1, 10000));
		
	var area = new Placeholder(game.width-148, 20, 128, 128);
	area.color = "rgba(45,45,45,0)";
	this.entities.push(area);
	
	area.onClick = function() {
		self.toggleFullScreen();
	};
}

MainScene.prototype = new Scene();


MainScene.prototype.toggleFullScreen = function() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
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
}