import type { infer as infer_zod } from 'zod/v4';
import { CreateOrganizationSchema } from './create-organization-schema';

export type EditOrganizationForm = infer_zod<typeof EditOrganizationSchema>;

export const EditOrganizationSchema = CreateOrganizationSchema.partial();
