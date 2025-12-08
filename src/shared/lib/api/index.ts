import axios from 'axios';
import { app_url, env } from '@/shared/constants/env-variables';

const axiosConfigWithCredentials = {
	baseURL: `${app_url}${env.NEXT_PUBLIC_API_SOURCE}`,
	withCredentials: true,
} as const;

export const api = axios.create(axiosConfigWithCredentials);
