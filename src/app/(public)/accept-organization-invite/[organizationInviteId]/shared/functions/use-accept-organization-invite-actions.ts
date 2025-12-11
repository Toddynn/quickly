'use client';

import { API_ROUTES } from '@/shared/constants/api-routes';
import { buildApiRoute } from '@/shared/functions/build-api-route';
import { getQueryClient } from '@/shared/functions/get-query-client';
import { handleErrorTreatment } from '@/shared/functions/handle-error-treatment';
import { invalidateQueries } from '@/shared/functions/invalidate-queries';
import { api } from '@/shared/lib/api';
import type { QueryKey } from '@tanstack/react-query';

interface BaseCallbackArgs {
	on_success?: () => void;
	on_fail?: () => void;
	query_keys_to_invalidate?: QueryKey;
}

interface AcceptOrganizationInviteArgs extends BaseCallbackArgs {
	invite_id: string;
	user_id: string;
}

interface UseAcceptOrganizationInviteActionsResult {
	acceptOrganizationInvite: (args: AcceptOrganizationInviteArgs) => Promise<void>;
}

export function useAcceptOrganizationInviteActions(): UseAcceptOrganizationInviteActionsResult {
	const query_client = getQueryClient();

	const acceptOrganizationInvite = async ({
		invite_id,
		user_id,
		on_fail,
		on_success,
		query_keys_to_invalidate,
	}: AcceptOrganizationInviteArgs) => {
		try {
			await api.patch(buildApiRoute(API_ROUTES.PATCH.PUBLIC.ACCEPT_ORGANIZATION_INVITE, { invite_id }), {
				user_id,
			});

			if (query_keys_to_invalidate) await invalidateQueries({ query_client, query_keys_to_invalidate });
			on_success?.();
		} catch (err) {
			on_fail?.();
			handleErrorTreatment(err);
		}
	};

	return {
		acceptOrganizationInvite,
	};
}

