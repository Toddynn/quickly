import { useQuery } from '@tanstack/react-query';
import { type GetPasswordResetByIdParams, getPasswordResetById } from '.';
import { get_password_reset_by_id_query_key } from './query-key';

export function useGetPasswordResetById({ password_reset_id }: GetPasswordResetByIdParams) {
	return useQuery({
		queryKey: get_password_reset_by_id_query_key({ password_reset_id }),
		queryFn: () => getPasswordResetById({ password_reset_id }),
		enabled: !!password_reset_id,
	});
}
