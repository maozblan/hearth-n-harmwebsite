import { characterData } from '$lib/data/characterData.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return Object.keys(characterData).map((character) => ({
		character
	}));
}

export function load({ params }) {
	const character = characterData[params.character];

	if (!character) {
		error(404, 'Page under construction');
	}

	return {
		character
	};
}