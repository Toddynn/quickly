'use client';

import { API_ROUTES } from '@/shared/constants/api-routes';
import { buildApiRoute } from '@/shared/functions/build-api-route';
import type { DefaultPaginatedResponse } from '@/shared/interfaces/default-paginated-response';
import type { DefaultPaginationParams } from '@/shared/interfaces/default-pagination-params';
import { api } from '@/shared/lib/api';

export interface OrganizationInvite {
	id: string;
	email: string;
	organization_id: string;
	inviter_id: string;
	status: string;
	expiration_date: string;
	created_at: string;
}

export interface PrivateGetAllOrganizationInvitesQueryParams extends Omit<DefaultPaginationParams, 'start_date' | 'end_date'> {
	organization_id: string;
}

export default async function privateGetAllOrganizationInvites({
	search,
	page = 1,
	limit = 15,
	organization_id,
}: PrivateGetAllOrganizationInvitesQueryParams): Promise<DefaultPaginatedResponse<Array<OrganizationInvite>>> {
	const res = await api.get(buildApiRoute(API_ROUTES.GET.PRIVATE.GET_ALL_ORGANIZATION_INVITES_PAGINATED, { organization_id }), {
		params: {
			search,
			page,
			limit,
		},
	});

	return res.data;
}

