import { enemyData } from '$lib/data/enemyData';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return Object.keys(enemyData).map((enemy) => ({
		enemy
	}));
}

export function load({ params }) {
	const character = enemyData[params.enemy];
	console.log(character);

	if (!character) {
		error(404, 'Page under construction');
	}

	return {
		enemy: character
	};
}