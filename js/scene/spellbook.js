function SpellbookScene() {
	var self = this;
	
	this.bg = new Sprite('img/level/bg.png');
	
	
	
	var i = 0;
	for(var name in spells) {
		var spellOverlay = new SpellOverlay(name, 30, true);
		spellOverlay.position = new V2(0, 0);
		spellOverlay.size = new V2(0, 0);
		spellOverlay.setSize(650, 530);
		this.entities.push(spellOverlay);

		spellOverlay.setPosition((630+43)*(i%3), 50 + 555*Math.floor(i/3));
		i++;
	}
	
	var backButton = new Placeholder();
	backButton.position = new V2(0, 0);
	backButton.size = new V2(0, 0);
	backButton.color = 'rgba(255,255,255,.9)';
	backButton.setSize(700, 600);
	var text = new Text('back');
	text.color = 'green';
	text.position = new V2(350, 300);
	text.size = new V2(700, 50);
	this.entities.push(backButton);
	this.entities.push(text);
	backButton.setPosition((700+43)*(i%3), 50 + 650*Math.floor(i/3));
	text.setPosition((700+43)*(i%3)+350, 50 + 650*Math.floor(i/3)+300);
	backButton.onClick = function() {
		game.scene = scenes.main;
		self.dragable.position.y = 0;
	}
	
	
	this.dragable = new Dragable(this.entities);
	this.dragable.__update = this.dragable.update;
	this.dragable.update = function(delta) {
		this.__update(delta);
		
		this.position.x = 180;
		this.position.y = 50;//Math.min(Math.max(this.position.y, self.getArea().height()-this.getArea().height() - 50), 0);
	};
	this.entities = [this.dragable];
	
	AddBackbutton(scenes.main, this.entities);		
}


SpellbookScene.prototype = new Scene();
SpellbookScene.prototype.constructor = SpellbookScene;