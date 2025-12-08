'use client';

import type { QueryKey } from '@tanstack/react-query';
import { API_ROUTES } from '@/shared/constants/api-routes';
import { buildApiRoute } from '@/shared/functions/build-api-route';
import { getQueryClient } from '@/shared/functions/get-query-client';
import { handleErrorTreatment } from '@/shared/functions/handle-error-treatment';
import { invalidateQueries } from '@/shared/functions/invalidate-queries';
import { api } from '@/shared/lib/api';
import { type CreateOrganizationForm, CreateOrganizationSchema } from '../schemas/create-organization-schema';

interface BaseCallbackArgs {
	on_success?: () => void;
	on_fail?: () => void;
	query_keys_to_invalidate?: QueryKey;
}
interface BaseActionArgs<T> extends BaseCallbackArgs {
	form_data: T;
}

interface UseOrganizationActionsResult {
	createOrganization: (args: BaseActionArgs<CreateOrganizationForm>) => Promise<void>;
	verifySlugAvailability: (args: BaseActionArgs<Pick<CreateOrganizationForm, 'slug'>>) => Promise<void>;
}

export function useOrganizationActions(): UseOrganizationActionsResult {
	const query_client = getQueryClient();

	const createOrganization = async ({ form_data, on_fail, on_success, query_keys_to_invalidate }: BaseActionArgs<CreateOrganizationForm>) => {
		try {
			const validated = await CreateOrganizationSchema.parseAsync(form_data);

			await api.post(buildApiRoute(API_ROUTES.POST.PRIVATE.CREATE_ORGANIZATION), validated);
			if (query_keys_to_invalidate) await invalidateQueries({ query_client, query_keys_to_invalidate });
			on_success?.();
		} catch (err) {
			on_fail?.();
			handleErrorTreatment(err);
		}
	};

	const verifySlugAvailability = async ({ form_data, on_fail, on_success }: BaseActionArgs<Pick<CreateOrganizationForm, 'slug'>>) => {
		try {
			const { slug } = await CreateOrganizationSchema.pick({ slug: true }).parseAsync(form_data);

			await api.get(buildApiRoute(API_ROUTES.GET.PRIVATE.VERIFY_ORGANIZATION_SLUG_AVAILABILITY, { slug }));
			on_success?.();
		} catch (err) {
			on_fail?.();
			handleErrorTreatment(err);
		}
	};

	return {
		createOrganization,
		verifySlugAvailability,
	};
}
