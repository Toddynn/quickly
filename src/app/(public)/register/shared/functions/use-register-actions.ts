'use client';

import { API_ROUTES } from '@/shared/constants/api-routes';
import { buildApiRoute } from '@/shared/functions/build-api-route';
import { handleErrorTreatment } from '@/shared/functions/handle-error-treatment';
import { api } from '@/shared/lib/api';
import { type RegisterForm, RegisterSchema } from '../schemas/register-schema';

interface BaseCallbackArgs {
	on_success?: () => void;
	on_fail?: () => void;
}

interface BaseActionArgs<T> extends BaseCallbackArgs {
	form_data: T;
}

interface UseRegisterActionsResult {
	createUser: (args: BaseActionArgs<RegisterForm>) => Promise<void>;
}

export function useRegisterActions(): UseRegisterActionsResult {
	const createUser = async ({ form_data, on_fail, on_success }: BaseActionArgs<RegisterForm>) => {
		try {
			const validated = await RegisterSchema.parseAsync(form_data);

			await api.post(buildApiRoute(API_ROUTES.POST.PUBLIC.CREATE_USER), validated);
			on_success?.();
		} catch (err) {
			on_fail?.();
			handleErrorTreatment(err);
		}
	};

	return {
		createUser,
	};
}
