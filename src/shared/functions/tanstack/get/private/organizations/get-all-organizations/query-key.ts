import type { QueryKey } from '@tanstack/react-query';
import type { PrivateGetAllOrganizationsQueryParams } from '.';

export const private_get_all_organizations_query_key = ({ user_id, search }: Omit<PrivateGetAllOrganizationsQueryParams, 'page' | 'page_size'>): QueryKey => [
	'private-get-all-organizations',
	user_id,
	search,
];
