import type { AxiosRequestConfig } from 'axios';

export const multipart_form_header: AxiosRequestConfig<FormData> = {
	headers: { 'Content-Type': 'multipart/form-data' },
	timeout: 2 * 60 * 1000,
	timeoutErrorMessage: 'Tempo limite de requisição atingido. Tente novamente em uma conexão estável',
};
