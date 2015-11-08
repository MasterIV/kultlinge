function AddBackbutton(action, entities) {
	var back = new PlaceholderCircle(80, 80, 44, 'rgba(255, 255, 255, 0.9)');
	entities.push(back);
	
	var text = new Text("◀", new V2(75, 100));
	text.size = new V2(40, 40);
	entities.push(text);
	
	var area = new Placeholder(20, 20, 128, 128);
	area.color = "rgba(0,0,0,0)";
	entities.push(area);
	
	area.onClick = function() {
		game.scene = action;
		s.play('sound/button.wav');
	};
}
