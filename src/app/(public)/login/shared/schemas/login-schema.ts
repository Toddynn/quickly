import { boolean, email, type infer as infer_zod, object, string } from 'zod/v4';

export type LoginForm = infer_zod<typeof LoginSchema>;

export const LoginSchema = object({
	email: email({ error: 'E-mail inválido.' }).min(1, { error: 'E-mail é obrigatório.' }),
	password: string().min(1, { error: 'Senha é obrigatória.' }),
	remember_me: boolean().default(false).optional(),
});
