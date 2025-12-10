import { type infer as infer_zod, object, string, uuid } from 'zod/v4';
import { CreateSlugSchema } from './create-slug-schema';

export type CreateOrganizationForm = infer_zod<typeof CreateOrganizationSchema>;

export const CreateOrganizationSchema = object({
	name: string().min(1, {
		error: 'Nome da organização deve ter no mínimo 1 caractere.',
	}),
	description: string().trim().optional(),
	slug: CreateSlugSchema,
	owner_id: uuid({ message: 'ID do usuário é obrigatório.' }),
	//file: array(FileSchema({})).min(1, { error: 'Selecione ao menos um arquivo' }).max(1, { error: 'Você pode enviar no máximo 1 arquivos' }),
});
