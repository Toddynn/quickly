import { email, type infer as infer_zod, object, string } from 'zod/v4';

export type RegisterForm = infer_zod<typeof RegisterSchema>;

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 128;

const HAS_LOWERCASE_REGEX = /[a-z]/;
const HAS_UPPERCASE_REGEX = /[A-Z]/;
const HAS_NUMBER_REGEX = /\d/;
const HAS_SPECIAL_CHAR_REGEX = /[@$!%*?&]/;

export const PasswordSchema = string()
	.trim()
	.refine((val) => val.length >= MIN_PASSWORD_LENGTH, {
		message: `Senha deve ter no mínimo ${MIN_PASSWORD_LENGTH} caracteres.`,
	})
	.refine((val) => val.length <= MAX_PASSWORD_LENGTH, {
		message: `Senha deve ter no máximo ${MAX_PASSWORD_LENGTH} caracteres.`,
	})
	.refine((val) => HAS_LOWERCASE_REGEX.test(val), {
		message: 'Senha deve conter pelo menos uma letra minúscula.',
	})
	.refine((val) => HAS_UPPERCASE_REGEX.test(val), {
		message: 'Senha deve conter pelo menos uma letra maiúscula.',
	})
	.refine((val) => HAS_NUMBER_REGEX.test(val), {
		message: 'Senha deve conter pelo menos um número.',
	})
	.refine((val) => HAS_SPECIAL_CHAR_REGEX.test(val), {
		message: 'Senha deve conter pelo menos um caractere especial (@$!%*?&).',
	});

export const RegisterSchema = object({
	name: string().min(1, { error: 'Nome é obrigatório.' }).trim(),
	email: email({ error: 'E-mail inválido.' }).min(1, { error: 'E-mail é obrigatório.' }),
	phone: string().optional(),
	password: PasswordSchema,
});
