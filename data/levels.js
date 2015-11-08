var levels = [
// ========================================================= //
// ======================= Level 1 ========================= //
// ========================================================= //
	{
		spell: "rain",

		spawnRate: 1600,
		spawnNumber: 5,

		gold: 5,
		silver: 4,
		bronze: 3,

		ingredients: {
			chicken: 2,
			sausage: 1,
			voodoo: 1,
			pretzel: 0,
			vegetable: 0,
			tongue: 1
		},

		loot: {
			chicken: 0,
			sausage: 0,
			voodoo: 0,
			pretzel: 0,
			vegetable: 0,
			tongue: 0
		}
	},
// ========================================================= //
// ======================= Level 2 ========================= //
// ========================================================= //
	{
		spell: "wall",

		spawnRate: 1600,
		spawnNumber: 5,

		gold: 5,
		silver: 4,
		bronze: 3,

		ingredients: {
			chicken: 2,
			sausage: 2,
			voodoo: 1,
			pretzel: 2,
			vegetable: 1,
			tongue: 3
		},

		loot: {
			chicken: 0,
			sausage: 0,
			voodoo: 0,
			pretzel: 0,
			vegetable: 0,
			tongue: 0
		}
	},
// ========================================================= //
// ======================= Level 3 ========================= //
// ========================================================= //
	{
		spell: "burn",

		spawnRate: 1600,
		spawnNumber: 7,

		gold: 6,
		silver: 4,
		bronze: 2,

		ingredients: {
			chicken: 2,
			sausage: 2,
			voodoo: 1,
			pretzel: 2,
			vegetable: 1,
			tongue: 3
		},

		loot: {
			chicken: 0,
			sausage: 0,
			voodoo: 0,
			pretzel: 0,
			vegetable: 0,
			tongue: 0
		}
	},

// ========================================================= //
// ======================= Level 4 ========================= //
// ========================================================= //
	{
		spell: "detonate",

		spawnRate: 1600,
		spawnNumber: 10,

		gold: 7,
		silver: 5,
		bronze: 3,

		ingredients: {
			chicken: 1,
			sausage: 0,
			voodoo: 2,
			pretzel: 2,
			vegetable: 2,
			tongue: 1
		},

		loot: {
			chicken: 1,
			sausage: 1,
			voodoo: 0,
			pretzel: 0,
			vegetable: 0,
			tongue: 0
		}
	}
];

levels[0].map = [[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"start"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":"ladder_up"},{"p":false,"e":"ladder_up"},{"p":false,"e":"ladder_up"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"fire"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":"ladder_down"},{"p":false,"e":"ladder_down"},{"p":false,"e":"ladder_down"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"goal"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}]];
levels[1].map = [[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":"ladder_up"},{"p":false,"e":"ladder_up"},{"p":false,"e":"ladder_up"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":"start"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"fire"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"fire"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":"fire"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":"ladder_down"},{"p":false,"e":"ladder_down"},{"p":false,"e":"ladder_down"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":"goal"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}]];
levels[2].map = [[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"start"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"thorns"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":"ladder_up"},{"p":false,"e":"ladder_up"},{"p":false,"e":"ladder_up"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"fire"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":"ladder_down"},{"p":false,"e":"ladder_down"},{"p":false,"e":"ladder_down"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"goal"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}]];
levels[3].map = [[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"chest"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"start"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"stone"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":"ladder_up"},{"p":false,"e":"ladder_up"},{"p":false,"e":"ladder_up"},{"p":false,"e":"ladder_up"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"stone"},{"p":true,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":"ladder_down"},{"p":false,"e":"ladder_down"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"fire"},{"p":true,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":"ladder_down"},{"p":false,"e":"ladder_down"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":"goal"},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}],[{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":false,"e":null},{"p":true,"e":null},{"p":false,"e":null},{"p":false,"e":null}]];










