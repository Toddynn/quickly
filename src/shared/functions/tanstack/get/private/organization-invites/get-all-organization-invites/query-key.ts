import type { QueryKey } from '@tanstack/react-query';
import type { PrivateGetAllOrganizationInvitesQueryParams } from '.';

export const private_get_all_organization_invites_query_key = ({
	organization_id,
	search,
}: Omit<PrivateGetAllOrganizationInvitesQueryParams, 'page' | 'limit'>): QueryKey => [
	'private-get-all-organization-invites',
	organization_id,
	search,
];

