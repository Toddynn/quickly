import type { InfiniteData } from '@tanstack/react-query';

export function arePagesShallowEqual<TPage>(prev?: InfiniteData<TPage>, next?: InfiniteData<TPage>): boolean {
	if (prev === next) return true;
	if (!prev || !next) return false;

	const p = prev.pages as unknown[];
	const n = next.pages as unknown[];

	if (p === n) return true;
	if (!p || !n) return false;
	if (p.length !== n.length) return false;

	// compara referência de cada página (barato e suficiente na maioria dos casos)
	for (let i = 0; i < p.length; i++) {
		if (p[i] !== n[i]) return false;
	}
	return true;
}
