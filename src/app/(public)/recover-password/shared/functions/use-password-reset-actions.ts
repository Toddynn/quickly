'use client';

import { API_ROUTES } from '@/shared/constants/api-routes';
import { buildApiRoute } from '@/shared/functions/build-api-route';
import { handleErrorTreatment } from '@/shared/functions/handle-error-treatment';
import { api } from '@/shared/lib/api';
import {
	type RequestPasswordResetForm,
	RequestPasswordResetSchema,
	type ResetPasswordForm,
	ResetPasswordSchema,
	type ValidatePasswordResetOtpForm,
	ValidatePasswordResetOtpSchema,
} from '../schemas/recover-password-schema';

interface BaseCallbackArgs {
	on_success?: () => void;
	on_fail?: () => void;
}

interface BaseActionArgs<T> extends BaseCallbackArgs {
	form_data: T;
}

interface ValidatePasswordResetResponse {
	valid: boolean;
	reset_token: string;
}

type ValidatePasswordResetOtpArgs = Omit<BaseActionArgs<ValidatePasswordResetOtpForm>, 'on_success'> & {
	on_success?: (response: ValidatePasswordResetResponse) => void;
};

interface UsePasswordResetActionsResult {
	requestPasswordReset: (args: BaseActionArgs<RequestPasswordResetForm>) => Promise<void>;
	validatePasswordResetOtp: (args: ValidatePasswordResetOtpArgs) => Promise<void>;
	resetPassword: (args: BaseActionArgs<ResetPasswordForm>) => Promise<void>;
}

export function usePasswordResetActions(): UsePasswordResetActionsResult {
	const requestPasswordReset = async ({ form_data, on_fail, on_success }: BaseActionArgs<RequestPasswordResetForm>) => {
		try {
			const validated = await RequestPasswordResetSchema.parseAsync(form_data);

			await api.post(buildApiRoute(API_ROUTES.POST.PUBLIC.REQUEST_PASSWORD_RESET), validated);
			on_success?.();
		} catch (err) {
			on_fail?.();
			handleErrorTreatment(err);
		}
	};

	const validatePasswordResetOtp = async ({ form_data, on_fail, on_success }: ValidatePasswordResetOtpArgs): Promise<void> => {
		try {
			const validated = await ValidatePasswordResetOtpSchema.parseAsync(form_data);

			const res = await api.post<ValidatePasswordResetResponse>(buildApiRoute(API_ROUTES.POST.PUBLIC.VALIDATE_PASSWORD_RESET_OTP), validated);
			on_success?.(res.data);
		} catch (err) {
			on_fail?.();
			handleErrorTreatment(err);
		}
	};

	const resetPassword = async ({ form_data, on_fail, on_success }: BaseActionArgs<ResetPasswordForm>) => {
		try {
			const validated = await ResetPasswordSchema.parseAsync(form_data);

			await api.post(buildApiRoute(API_ROUTES.POST.PUBLIC.RESET_PASSWORD), validated);
			on_success?.();
		} catch (err) {
			on_fail?.();
			handleErrorTreatment(err);
		}
	};

	return {
		requestPasswordReset,
		validatePasswordResetOtp,
		resetPassword,
	};
}
