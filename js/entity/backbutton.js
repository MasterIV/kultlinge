g.add('img/ui/backbutton.png');

function AddBackbutton(action, entities) {
	var back = new PlaceholderCircle(80, 80, 44, 'rgba(255, 255, 255, 0.9)');
	entities.push(back);
	
	entities.push(new ImageEntity('img/ui/backbutton.png', new V2(52,55)));
	
	var area = new Placeholder(20, 20, 128, 128);
	area.color = "rgba(0,0,0,0)";
	entities.push(area);
	
	area.onClick = function() {
		game.scene = action;
		s.play('sound/button.wav');
	};
}
