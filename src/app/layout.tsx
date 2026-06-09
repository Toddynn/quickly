import type { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';
import { dmSansFont, gugiFont } from '@/shared/constants/fonts';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/shared/lib/utils';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'Quickly',
	description: 'Gestão de agendamentos simples e fácil, como deve ser.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			suppressHydrationWarning
			lang="pt-BR"
			className={cn(twMerge(dmSansFont.variable, gugiFont.variable, 'font-dm_sans'), 'font-sans', inter.variable)}
		>
			<body suppressHydrationWarning className={'scroll-smooth antialiased'}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
