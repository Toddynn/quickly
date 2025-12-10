import type { DefaultPaginatedResponse } from '@/shared/interfaces/default-paginated-response';

/**
 * Returns the next page number based on the total pages and current page.
 * If there are no more pages, returns undefined.
 * @param {Object} params - Object containing totalPages and currentPage.
 * @returns {number | undefined} - The next page number or undefined if there are no more pages.
 */
export default function getNextPageParam<T>({ page, total_pages }: Pick<DefaultPaginatedResponse<T>, 'total_pages' | 'page'>): number | undefined {
	return total_pages > page ? page + 1 : undefined;
}
