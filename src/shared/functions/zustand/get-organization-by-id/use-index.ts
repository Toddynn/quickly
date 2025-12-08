import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { type GetOrganizationByIdParams, getOrganizationById } from '.';
import { get_organization_by_id_query_key } from './query-key';

export function useGetOrganizationById({ organization_id }: GetOrganizationByIdParams) {
	return useQuery({
		queryKey: get_organization_by_id_query_key({ organization_id }),
		queryFn: () => getOrganizationById({ organization_id }),
	});
}

export function useSuspenseGetOrganizationById({ organization_id }: GetOrganizationByIdParams) {
	return useSuspenseQuery({
		queryKey: get_organization_by_id_query_key({ organization_id }),
		queryFn: () => getOrganizationById({ organization_id }),
	});
}
