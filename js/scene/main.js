g.add("img/ui/menu.png");

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
				self.goFullScreen();
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
				self.goFullScreen();
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
				self.goFullScreen();
				game.scene = scenes.credits;
			},
			buttonColorsHover,
			'sound/button.mp3',
			'80px sans-serif'
		),
		];	
}

MainScene.prototype = new Scene();


MainScene.prototype.goFullScreen = function() {
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
/*    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
*/
}
}