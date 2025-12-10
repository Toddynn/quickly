import type { FieldError as ReactHookFormFieldError } from 'react-hook-form';

export function extractAllFieldErrors(
	fieldError: ReactHookFormFieldError | undefined,
	formStateFieldError?: ReactHookFormFieldError | undefined,
): Array<{ message?: string }> {
	const passwordErrors = formStateFieldError || fieldError;

	if (passwordErrors?.types) {
		return Object.values(passwordErrors.types)
			.flat()
			.filter((message): message is string => typeof message === 'string')
			.map((message) => ({ message }));
	}

	if ('issues' in (fieldError || {})) {
		const zodError = fieldError as { issues?: Array<{ message?: string }> };
		return zodError.issues?.map((issue) => ({ message: issue.message })) || [];
	}

	if (fieldError) {
		return [fieldError];
	}

	return [];
}
