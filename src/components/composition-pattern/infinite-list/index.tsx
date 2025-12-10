'use client';

import type { InfiniteData } from '@tanstack/react-query';
import { Fragment, type JSX, type Key, type ReactNode, memo, useCallback, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/shared/lib/utils';
import { InfiniteListDefaultEmptyList } from './components/default-empty-list';
import { InfiniteListDefaultEmptyPage } from './components/default-empty-page';
import { InfiniteListDefaultErrorView } from './components/default-error-view';
import { InfiniteListDefaultLoader } from './components/default-loader';
import { InfiniteListDefaultLoadingMore } from './components/default-loading-more';
import { arePropsEqual } from './shared/functions/are-props-equal';

type NodeOrFnProps = {
	EmptyList?: ReactNode | ((props: { retry?: () => void }) => ReactNode);
	EmptyPage?: ReactNode | ((props: { pageIndex: number }) => ReactNode);
	Loader?: ReactNode;
	LoadingMore?: ReactNode;
	ErrorView?: ReactNode | ((props: { error: Error; retry?: () => void }) => ReactNode);
};

export type InfiniteListProps<TPage, TItem> = NodeOrFnProps & {
	pages?: InfiniteData<TPage>;
	getItems?: (page: TPage, pageIndex: number) => TItem[];
	renderItem: (item: TItem, index: number, pageIndex: number) => ReactNode;
	keyExtractor?: (item: TItem, index: number) => Key;

	isLoading?: boolean;
	isFetchingNextPage?: boolean;
	hasNextPage?: boolean;
	error: Error | null;
	onEndReached?: () => void;

	wrapperClassName?: string;
	loaderClassName?: string;
	loadingMoreClassName?: string;
	emptyListClassName?: string;
	emptyPageClassName?: string;
	errorViewClassName?: string;
	className?: string;
	sentinelId?: string;
	autoFetch?: boolean;
};

/* -------------------------------- componente -------------------------------- */

function InfiniteListBase<TPage extends { data: TItem[] }, TItem extends { id: string }>({
	pages,
	getItems,
	renderItem,
	keyExtractor,

	isLoading,
	isFetchingNextPage,
	hasNextPage,
	error,
	onEndReached,

	wrapperClassName,
	emptyListClassName,
	emptyPageClassName,
	errorViewClassName,
	loaderClassName,
	loadingMoreClassName,
	className,
	sentinelId = 'infiniteListSentinel',
	autoFetch = true,

	Loader = <InfiniteListDefaultLoader className={loaderClassName} />,
	LoadingMore = <InfiniteListDefaultLoadingMore className={loadingMoreClassName} />,
	EmptyList = <InfiniteListDefaultEmptyList className={emptyListClassName} />,
	EmptyPage = <InfiniteListDefaultEmptyPage pageIndex={0} className={emptyPageClassName} />,
	ErrorView = <InfiniteListDefaultErrorView error={error} retry={onEndReached} className={errorViewClassName} />,
}: InfiniteListProps<TPage, TItem>) {
	const { ref, inView } = useInView();

	useEffect(() => {
		if (!autoFetch) return;
		if (inView && hasNextPage && !isLoading && !error) {
			onEndReached?.();
		}
	}, [inView, hasNextPage, isLoading, error, onEndReached, autoFetch]);

	const defaultGetItems = useCallback((page: TPage) => (Array.isArray(page.data) ? page.data : []), []);

	const defaultKeyExtractor = useCallback((item: TItem, i: number) => item?.id ?? i, []);

	const safeGetItems = getItems ?? defaultGetItems;
	const safeKeyExtractor = keyExtractor ?? defaultKeyExtractor;

	const { pagesItems, isCompletelyEmpty } = useMemo(() => {
		const pagesArr = pages?.pages ?? [];
		const perPage = pagesArr.map((p, i) => safeGetItems(p, i) ?? []);
		const empty = perPage.every((arr) => arr.length === 0);
		return { pagesItems: perPage, isCompletelyEmpty: empty };
	}, [pages?.pages, safeGetItems]);

	// helpers para suportar node ou função
	const renderMaybe = (n: NodeOrFnProps[keyof NodeOrFnProps], args?: any) => (typeof n === 'function' ? n(args ?? {}) : (n ?? null));

	if (isLoading) {
		return <div className={wrapperClassName}>{renderMaybe(Loader)}</div>;
	}

	if (error) {
		const retry = () => onEndReached?.();
		return <div className={wrapperClassName}>{renderMaybe(ErrorView, { error, retry })}</div>;
	}

	if (!pages?.pages || isCompletelyEmpty) {
		const retry = () => onEndReached?.();
		return <div className={wrapperClassName}>{renderMaybe(EmptyList, { retry })}</div>;
	}

	return (
		<div className={cn('w-full space-y-4', wrapperClassName)}>
			<div className={cn(className)}>
				{pagesItems.map((items, pageIndex) => {
					if (items.length === 0) {
						return (
							<Fragment key={`page-${pageIndex}`}>
								{renderMaybe((props: { pageIndex: number }) => <InfiniteListDefaultEmptyPage {...props} />, { pageIndex }) ||
									renderMaybe(EmptyPage, { pageIndex })}
							</Fragment>
						);
					}
					return (
						<Fragment key={`page-${pageIndex}`}>
							{items.map((item, i) => (
								<Fragment key={safeKeyExtractor(item, i)}>{renderItem(item, i, pageIndex)}</Fragment>
							))}
						</Fragment>
					);
				})}
			</div>

			{isFetchingNextPage ? renderMaybe(LoadingMore) : null}

			<div ref={ref} id={sentinelId} aria-hidden />
		</div>
	);
}

export const InfiniteList = memo(InfiniteListBase, arePropsEqual) as <TPage, TItem>(props: InfiniteListProps<TPage, TItem>) => JSX.Element;
