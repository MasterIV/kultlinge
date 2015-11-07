g.add('img/ingredients/Chicken.png');
g.add('img/ingredients/Vookie.png');
g.add('img/ingredients/Pretzel.png');
g.add('img/ingredients/Tongue.png');
g.add('img/ingredients/Vegetable.png');
g.add('img/ingredients/Sausage.png');

var ingredients = {
	chicken: {img: "img/ingredients/Chicken.png", name: "chicken head"},
	sausage: {img: "img/ingredients/Sausage.png", name: "blood sausage "},
	voodoo: {img: "img/ingredients/Vookie.png", name: "voodoo gingerbread man"},
	pretzel: {img: "img/ingredients/Pretzel.png", name: "wholemeal pretzel"},
	vegetable: {img: "img/ingredients/Vegetable.png", name: "brussels sprouts"},
	tongue: {img: "img/ingredients/Tongue.png", name: "lamb tongue"}
};

var spells = {
	frost: {
		name: "Freeze",
		ingredients: ['chicken', 'pretzel', 'vegetable'],
		description: "Not only Jesus can walk on water, as long as it is frozen."
	},
	burn: {
		name: "Ignite",
		ingredients: ['sausage', 'voodoo', 'tongue'],
		description: "Some kultlings still burn for their belief."
	},
	detonate: {
		name: "Cadaver explosion",
		ingredients: ['voodoo', 'pretzel', 'vegetable'],
		description: "Now also works on living beings!"
	},
	rain: {
		name: "Rain",
		ingredients: ['chicken', 'sausage', 'tongue'],
		description: "Somehow reminds me of Hamburg."
	},
	ladder: {
		name: "Beanstalk",
		ingredients: ['chicken', 'voodoo', 'tongue'],
		description: "For the advanced amateur gardeners. Kultlings love climbing!"
	},
	wall: {
		name: "Wall",
		ingredients: ['pretzel', 'vegetable', 'tongue'],
		description: "Sometimes we do not need do free a way but to block it."
	}
};
