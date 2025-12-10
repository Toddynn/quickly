import type { InfiniteListProps } from '../..';
import { arePagesShallowEqual } from './are-pages-shallow-equal';

export function arePropsEqual<TPage, TItem>(prev: Readonly<InfiniteListProps<TPage, TItem>>, next: Readonly<InfiniteListProps<TPage, TItem>>) {
	// flags simples / strings
	if (prev.isLoading !== next.isLoading) return false;
	if (prev.isFetchingNextPage !== next.isFetchingNextPage) return false;
	if (prev.hasNextPage !== next.hasNextPage) return false;
	if (prev.autoFetch !== next.autoFetch) return false;
	if (prev.className !== next.className) return false;
	if (prev.sentinelId !== next.sentinelId) return false;

	// funções/JSX (referência)
	if (prev.onEndReached !== next.onEndReached) return false;
	if (prev.getItems !== next.getItems) return false;
	if (prev.renderItem !== next.renderItem) return false;
	if (prev.keyExtractor !== next.keyExtractor) return false;

	if (prev.Loader !== next.Loader) return false;
	if (prev.LoadingMore !== next.LoadingMore) return false;
	if (prev.EmptyList !== next.EmptyList) return false;
	if (prev.EmptyPage !== next.EmptyPage) return false;
	if (prev.ErrorView !== next.ErrorView) return false;

	// error: usa Object.is pra diferenciar undefined/null/objects
	if (!Object.is(prev.error, next.error)) return false;

	// pages: compara shallow (tamanho e referências das páginas)
	if (!arePagesShallowEqual(prev.pages, next.pages)) return false;

	return true; // nada relevante mudou
}
