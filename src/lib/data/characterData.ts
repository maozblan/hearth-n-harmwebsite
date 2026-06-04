import { img } from "../../routes/img";

export const characterData = {
	smokestack: {
		name: "Smokestack",
		pfpId: "smokePfp",
		description: "A tanky bruiser designed to be in the fray of battle.",
		image: img.smoke,
		color1: "#841010", // skill upper border color
		color2: "#af2121", // skill background color
		skills: [
			{
				name: "Slash",
				desc: "Deal 2d6 Damage.",
				cost: "2 Stamina",
			},
			{
				name: "Strike",
				desc: "Deal 1d8 Damage in a [3 x 2] area.",
				cost: "6 Stamina",
			},
			{
				name: "Heat Up",
				desc: "Your next 3 Rolls gain a Bonus 1d4 and Ignites Tiles.",
				cost: "2 Health",
			},
			{
				name: "Guard",
				desc: "Take 50% less damage until your next Turn. For every time you're attacked, gain 1 Stamina next Turn.",
				cost: "6 Stamina",
			},
		],
	},
	sconestance: {
		name: "Sconestance",
		pfpId: "sconePfp",
		description: "A ranged mage with support from behind.",
		image: img.scone,
		color1: "#134391",
		color2: "#2f67c1",
		skills: [
			{
				name: "Strike",
				desc: "Deal 1d4 Damage.",
				cost: "2 Stamina",
			},
			{
				name: "Flamelash",
				desc: "Deal 1d8 Damage in a [3 x 2] area.",
				cost: "6 Stamina",
			},
			{
				name: "Ignite",
				desc: "Ignite a Tile.",
				cost: "1 Stamina",
			},
			{
				name: "Guard",
				desc: "Take 50% less damage until your next Turn. For every time you're attacked, gain 1 Stamina next Turn.",
				cost: "6 Stamina",
			},
		],
	}
};
