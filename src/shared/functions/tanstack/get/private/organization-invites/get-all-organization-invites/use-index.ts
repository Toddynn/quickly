'use client';

import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import getNextPageParam from '@/shared/functions/get-next-page-param';
import privateGetAllOrganizationInvites, { type PrivateGetAllOrganizationInvitesQueryParams } from '.';
import { private_get_all_organization_invites_query_key } from './query-key';

export function usePrivateInfiniteGetAllOrganizationInvitesPaginated({
	page = 1,
	limit = 15,
	organization_id,
	search,
}: PrivateGetAllOrganizationInvitesQueryParams) {
	return useInfiniteQuery({
		queryKey: private_get_all_organization_invites_query_key({ organization_id, search }),
		queryFn: async ({ pageParam }) =>
			await privateGetAllOrganizationInvites({
				page: pageParam,
				limit,
				organization_id,
				search,
			}),
		placeholderData: keepPreviousData,
		initialPageParam: Number(page),
		getNextPageParam: ({ total_pages, page }) => getNextPageParam({ total_pages, page }),
	});
}

