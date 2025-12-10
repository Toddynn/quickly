'use client';

import type { QueryKey } from '@tanstack/react-query';
import { API_ROUTES } from '@/shared/constants/api-routes';
import { buildApiRoute } from '@/shared/functions/build-api-route';
import { getQueryClient } from '@/shared/functions/get-query-client';
import { handleErrorTreatment } from '@/shared/functions/handle-error-treatment';
import { invalidateQueries } from '@/shared/functions/invalidate-queries';
import { api } from '@/shared/lib/api';
import { type CreateOrganizationInviteForm, CreateOrganizationInviteSchema } from '../schemas/create-organization-invite-schema';

interface BaseCallbackArgs {
	on_success?: () => void;
	on_fail?: () => void;
	query_keys_to_invalidate?: QueryKey;
}

interface CreateOrganizationInviteArgs extends BaseCallbackArgs {
	form_data: CreateOrganizationInviteForm;
	organization_id: string;
	// TODO: Trocar para pegar do current user quando tiver login implementado
	inviter_id: string;
}

interface UseOrganizationInviteActionsResult {
	createOrganizationInvite: (args: CreateOrganizationInviteArgs) => Promise<void>;
}

export function useOrganizationInviteActions(): UseOrganizationInviteActionsResult {
	const query_client = getQueryClient();

	const createOrganizationInvite = async ({
		form_data,
		organization_id,
		inviter_id,
		on_fail,
		on_success,
		query_keys_to_invalidate,
	}: CreateOrganizationInviteArgs) => {
		try {
			const validated = await CreateOrganizationInviteSchema.parseAsync(form_data);

			// TODO: Trocar organization_id e inviter_id para pegar do current user e current organization quando tiver login implementado
			await api.post(buildApiRoute(API_ROUTES.POST.PRIVATE.CREATE_ORGANIZATION_INVITE), {
				...validated,
				organization_id,
				inviter_id,
			});

			if (query_keys_to_invalidate) await invalidateQueries({ query_client, query_keys_to_invalidate });
			on_success?.();
		} catch (err) {
			on_fail?.();
			handleErrorTreatment(err);
		}
	};

	return {
		createOrganizationInvite,
	};
}

