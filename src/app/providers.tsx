'use client';

import { TanstackQueryClientProvider } from '@/lib/providers/tanstack-query';
import { HeroUIProvider } from '@heroui/react';
import dynamic from 'next/dynamic';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

const NextThemesProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider), { ssr: false });

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<TanstackQueryClientProvider>
			<HeroUIProvider locale="pt-BR">
				<NuqsAdapter>
					<NextThemesProvider attribute="class" defaultTheme="dark">
						<Toaster richColors position="top-center" closeButton />
						{children}
					</NextThemesProvider>
				</NuqsAdapter>
			</HeroUIProvider>
		</TanstackQueryClientProvider>
	);
}
