import { API_ROUTES } from '@/shared/constants/api-routes';
import { api } from '@/shared/lib/api';
import { buildApiRoute } from '../../build-api-route';

export interface Organization {
	id: string;
	name: string;
	description: string;
	slug: string;
}

export interface GetOrganizationByIdParams {
	organization_id: string;
}
export async function getOrganizationById({ organization_id }: GetOrganizationByIdParams): Promise<Organization> {
	const res = await api.get(buildApiRoute(API_ROUTES.GET.PRIVATE.GET_ORGANIZATION_BY_ID, { organization_id }));
	return res.data;
}
