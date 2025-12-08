import type { QueryKey } from '@tanstack/react-query';
import type { GetOrganizationByIdParams } from '.';

export const get_organization_by_id_query_key = ({ organization_id }: GetOrganizationByIdParams): QueryKey => ['get-organization-by-id', organization_id];
