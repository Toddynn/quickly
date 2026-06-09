'use client';

import dynamic from 'next/dynamic';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TanstackQueryClientProvider } from '@/shared/lib/providers/tanstack-query';

const NextThemesProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider), { ssr: false });

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<TanstackQueryClientProvider>
			<NuqsAdapter>
				<NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
					<Toaster richColors position="top-center" closeButton />
					<TooltipProvider>{children}</TooltipProvider>
				</NextThemesProvider>
			</NuqsAdapter>
		</TanstackQueryClientProvider>
	);
}
