import { enemyData } from '$lib/data/enemyData';
import { pages } from '$lib/data/pageData.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return Object.keys(enemyData).map((page) => ({
		page
	}));
}

export function load({ params }) {
	const p = pages[params.page];

	if (!p) {
		error(404, 'Page under construction');
	}

	return {
		enemy: p
	};
}