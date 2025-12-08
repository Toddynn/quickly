import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { ZodError } from 'zod/v4';

export enum AXIOS_STRING_ERROR_CODES {
	CANCELED = 'ERR_CANCELED',
	NETWORK_ERROR = 'ERR_NETWORK',
	TIMEOUT = 'ECONNABORTED',
}

export function handleErrorTreatment(error: unknown): boolean {
	if (error instanceof ZodError) {
		handleZodError(error);
		return true;
	} else if (error instanceof AxiosError) {
		handleAxiosError(error);
		return false;
	} else {
		toast.error('Ocorreu um erro ao processar os dados.');
		return false;
	}
}

const handleAxiosError = (error: AxiosError) => {
	if (!error.code) {
		toast.error(error.message || 'Ocorreu um erro inesperado.');
		return;
	}

	switch (error.code) {
		case AXIOS_STRING_ERROR_CODES.CANCELED:
			toast.info('Requisição cancelada pelo usuário.');
			break;
		case AXIOS_STRING_ERROR_CODES.NETWORK_ERROR:
			toast.error('Erro de rede. Verifique sua conexão.');
			break;
		case AXIOS_STRING_ERROR_CODES.TIMEOUT:
			toast.error('A requisição demorou muito e foi abortada.');
			break;
		default:
			if (error.response?.data && typeof error.response.data === 'object' && 'message' in error.response.data) {
				if (Array.isArray(error.response.data.message)) {
					for (const message of error.response.data.message) {
						toast.error(message);
					}
				} else {
					toast.error(String(error.response.data.message));
				}
			} else {
				toast.error(error.message || 'Ocorreu um erro ao processar a requisição.');
			}
	}
};

const handleZodError = (error: ZodError) => {
	if (error.issues.length > 0) {
		for (const issue of error.issues) {
			toast.error(issue.message);
		}
	} else {
		toast.error('Ocorreu um erro de validação, mas nenhuma informação específica foi fornecida.');
	}
};
