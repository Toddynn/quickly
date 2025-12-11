'use client';

import { API_ROUTES } from '@/shared/constants/api-routes';
import { buildApiRoute } from '@/shared/functions/build-api-route';
import { api } from '@/shared/lib/api';
import type { OrganizationInvite } from '../../../private/organization-invites/get-all-organization-invites';

export interface GetOrganizationInviteByIdParams {
	invite_id: string;
}

export interface OrganizationInviteWithRelations extends OrganizationInvite {
	organization: {
		id: string;
		name: string;
		slug: string;
	};
	inviter: {
		id: string;
		name: string;
		email: string;
	};
}

export default async function getOrganizationInviteById({ invite_id }: GetOrganizationInviteByIdParams): Promise<OrganizationInviteWithRelations> {
	const res = await api.get(buildApiRoute(API_ROUTES.GET.PUBLIC.GET_ORGANIZATION_INVITE_BY_ID, { invite_id }));
	return res.data;
}
