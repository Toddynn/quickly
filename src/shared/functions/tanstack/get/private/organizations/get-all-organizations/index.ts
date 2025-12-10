'use client';

import { API_ROUTES } from '@/shared/constants/api-routes';
import { buildApiRoute } from '@/shared/functions/build-api-route';
import type { Organization } from '@/shared/functions/zustand/get-organization-by-id';
import type { DefaultPaginatedResponse } from '@/shared/interfaces/default-paginated-response';
import type { DefaultPaginationParams } from '@/shared/interfaces/default-pagination-params';
import { api } from '@/shared/lib/api';

// TODO: Trocar user_id para pegar do current user quando tiver login implementado
export interface PrivateGetAllOrganizationsQueryParams extends Omit<DefaultPaginationParams, 'start_date' | 'end_date'> {
	user_id: string;
}

export default async function privateGetAllOrganizations({
	search,
	page = 1,
	limit = 15,
	user_id,
}: PrivateGetAllOrganizationsQueryParams): Promise<DefaultPaginatedResponse<Array<Organization>>> {
	const res = await api.get(buildApiRoute(API_ROUTES.GET.PRIVATE.GET_ALL_ORGANIZATIONS_PAGINATED, { user_id }), {
		params: {
			search,
			page,
			limit,
		},
	});

	return res.data;
}
