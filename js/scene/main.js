g.add('img/ui/menu.png');
g.add('img/ui/fullscreen.png');

function MainScene() {
	var self = this;
	
	this.bg = new Sprite("img/ui/menu.png");
	
	
	this.entities = [
		new TextButton(
			"Start", 
			new V2(game.width/2 - 1000, 850), 
			new V2(600, 200), 
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
			new V2(600, 200), 
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
			new V2(600, 200), 
			buttonColors, 
			function() {
				game.scene = scenes.credits;
			},
			buttonColorsHover,
			'sound/button.mp3',
			'80px sans-serif'
		),
		];	
		
		
	var back = new PlaceholderCircle(game.width - 92, 80, 44, 'rgba(255, 255, 255, 0.9)');
	this.entities.push(back);
	
	this.entities.push(new ImageEntity('img/ui/fullscreen.png', new V2(game.width-108,64)));
	
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