import type { QueryKey } from '@tanstack/react-query';
import type { GetOrganizationInviteByIdParams } from '.';

export const get_organization_invite_by_id_query_key = ({ invite_id }: GetOrganizationInviteByIdParams): QueryKey => [
	'public-get-organization-invite-by-id',
	invite_id,
];
