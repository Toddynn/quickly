'use client';

import { useQuery } from '@tanstack/react-query';
import getOrganizationInviteById, { type GetOrganizationInviteByIdParams } from '.';
import { get_organization_invite_by_id_query_key } from './query-key';

export function useGetOrganizationInviteById({ invite_id }: GetOrganizationInviteByIdParams) {
	return useQuery({
		queryKey: get_organization_invite_by_id_query_key({ invite_id }),
		queryFn: () => getOrganizationInviteById({ invite_id }),
		enabled: !!invite_id,
	});
}
