import { API_ROUTES } from '@/shared/constants/api-routes';
import { buildApiRoute } from '@/shared/functions/build-api-route';
import { api } from '@/shared/lib/api';

export interface PasswordReset {
	id: string;
	email: string;
	status: 'PENDING' | 'EXPIRED' | 'USED';
	created_at: string;
	updated_at: string;
	expires_at: string;
}

export interface GetPasswordResetByIdParams {
	password_reset_id: string;
}

export async function getPasswordResetById({ password_reset_id }: GetPasswordResetByIdParams): Promise<PasswordReset | null> {
	const res = await api.get(buildApiRoute(API_ROUTES.GET.PUBLIC.GET_PASSWORD_RESET_BY_ID, { password_reset_id }));
	return res.data;
}
