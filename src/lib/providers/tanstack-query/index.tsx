'use client';

import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query';

let browserQueryClient: QueryClient | undefined = undefined;

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
				refetchOnWindowFocus: 'always',
				refetchOnMount: 'always',
			},
		},
	});
}

export function getQueryClient() {
	if (isServer) {
		return makeQueryClient();
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient();
		return browserQueryClient;
	}
}
export const TanstackQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
	const queryClient = getQueryClient();
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
