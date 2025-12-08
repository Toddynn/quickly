'use client';
import type { QueryClient, QueryKey } from '@tanstack/react-query';

interface InvalidateQueriesProps {
	query_client: QueryClient;
	query_keys_to_invalidate: QueryKey;
}
export const invalidateQueries = async ({ query_client, query_keys_to_invalidate }: InvalidateQueriesProps) => {
	await query_client.invalidateQueries({
		predicate: (query) => query_keys_to_invalidate.includes(String(query.queryKey.at(0))),
	});
};
