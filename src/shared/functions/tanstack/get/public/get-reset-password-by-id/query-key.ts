import type { GetPasswordResetByIdParams } from '.';

export const get_password_reset_by_id_query_key = ({ password_reset_id }: GetPasswordResetByIdParams) => ['password-reset-by-id', password_reset_id];
