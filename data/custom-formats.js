export const Formats = [
	{
		section: "Custom Formats",
		column: 1,
	},
	{
		name: "[Gen 9] 2v2 Full Teams",
		desc: "2 players vs 2 players, each player brings 6 Pokémon.",
		mod: 'gen9',
		gameType: 'multi',
		teamLength: {
			validate: [6, 6],
			battle: 2,
		},
		ruleset: ['Standard'],
	},
];
