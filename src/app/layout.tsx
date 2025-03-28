import { dmSansFont, gugiFont } from '@/shared/constants/fonts';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';
import './globals.css';
import Providers from './providers';

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
		<html suppressHydrationWarning lang="ptbr" className={twMerge(dmSansFont.variable, gugiFont.variable, 'font-dm_sans')}>
			<body suppressHydrationWarning className={'scroll-smooth antialiased'}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
