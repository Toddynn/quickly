import { email, type infer as infer_zod, object } from 'zod/v4';

export type CreateOrganizationInviteForm = infer_zod<typeof CreateOrganizationInviteSchema>;

export const CreateOrganizationInviteSchema = object({
	email: email({ error: 'E-mail inválido.' }).min(1, { error: 'E-mail é obrigatório.' }),
});
