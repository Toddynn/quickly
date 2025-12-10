import { email, type infer as infer_zod, object, string } from 'zod/v4';
import { PasswordSchema } from '@/app/(public)/register/shared/schemas/register-schema';

export const ONLY_NUMBERS_REGEX = /^\d+$/;
export type RequestPasswordResetForm = infer_zod<typeof RequestPasswordResetSchema>;

export const RequestPasswordResetSchema = object({
	email: email({ error: 'E-mail inválido.' }).min(1, { error: 'E-mail é obrigatório.' }),
});

export type ValidatePasswordResetOtpForm = infer_zod<typeof ValidatePasswordResetOtpSchema>;

export const ValidatePasswordResetOtpSchema = object({
	email: email({ error: 'E-mail inválido.' }).min(1, { error: 'E-mail é obrigatório.' }),
	code: string()
		.min(6, { error: 'Código OTP deve ter 6 dígitos.' })
		.max(6, { error: 'Código OTP deve ter 6 dígitos.' })
		.regex(ONLY_NUMBERS_REGEX, { error: 'Código OTP deve conter apenas números.' }),
});

export type ResetPasswordForm = infer_zod<typeof ResetPasswordSchema>;

export const ResetPasswordSchema = object({
	reset_token: string().min(1, { error: 'Token é obrigatório.' }),
	new_password: PasswordSchema,
});

export type RecoverPasswordForm = infer_zod<typeof RecoverPasswordSchema>;

export const RecoverPasswordSchema = object({
	email: email({ error: 'E-mail inválido.' }).min(1, { error: 'E-mail é obrigatório.' }),
	code: string()
		.min(6, { error: 'Código OTP deve ter 6 dígitos.' })
		.max(6, { error: 'Código OTP deve ter 6 dígitos.' })
		.regex(ONLY_NUMBERS_REGEX, { error: 'Código OTP deve conter apenas números.' }),
	new_password: PasswordSchema,
});
