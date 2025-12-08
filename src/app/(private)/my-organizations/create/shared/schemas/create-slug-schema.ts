import { type infer as infer_zod, string } from 'zod';

const MIN_LENGTH = 3;
const MAX_LENGTH = 35;
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type CreateSlugForm = infer_zod<typeof CreateSlugSchema>;

export const CreateSlugSchema = string()
	.transform((val) => val.trim().toLowerCase())
	.pipe(
		string({ error: (issue) => (issue.input === undefined ? 'Domínio da organização é um campo obrigatório.' : undefined) })
			.min(MIN_LENGTH, {
				message: `O slug deve ter no mínimo ${MIN_LENGTH} caracteres.`,
			})
			.max(MAX_LENGTH, {
				message: `O slug deve ter no máximo ${MAX_LENGTH} caracteres.`,
			})
			.refine((val) => !val.startsWith('-') && !val.endsWith('-'), {
				message: 'O slug não pode começar ou terminar com hífen.',
			})
			.refine((val) => !val.includes('--'), {
				message: 'O slug não pode conter hífens consecutivos.',
			})
			.refine((val) => SLUG_REGEX.test(val), {
				message: 'O slug deve conter apenas letras minúsculas, números e hífens.',
			}),
	);
