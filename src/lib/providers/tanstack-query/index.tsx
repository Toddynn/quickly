import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@/shared/functions/get-query-client';

export const TanstackQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
	const queryClient = getQueryClient();
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
