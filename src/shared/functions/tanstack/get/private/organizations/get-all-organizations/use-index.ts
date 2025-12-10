'use client';

import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import getNextPageParam from '@/shared/functions/get-next-page-param';
import privateGetAllOrganizations, { type PrivateGetAllOrganizationsQueryParams } from '.';
import { private_get_all_organizations_query_key } from './query-key';

// TODO: Trocar user_id para pegar do current user quando tiver login implementado
export function usePrivateInfiniteGetAllOrganizationsPaginated({ page = 1, limit = 15, user_id, search }: PrivateGetAllOrganizationsQueryParams) {
	return useInfiniteQuery({
		queryKey: private_get_all_organizations_query_key({ user_id, search }),
		queryFn: async ({ pageParam }) =>
			await privateGetAllOrganizations({
				page: pageParam,
				limit,
				user_id,
			}),
		placeholderData: keepPreviousData,
		initialPageParam: Number(page),
		getNextPageParam: ({ total_pages, page }) => getNextPageParam({ total_pages, page }),
	});
}
