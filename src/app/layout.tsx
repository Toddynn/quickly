import { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
	title: 'Quickly',
	description: 'Gestão de agendamentos simples e fácil, como deve ser.',
};

const dmSansFont = DM_Sans({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
	variable: '--font-dm-sans',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="ptbr" className={twMerge(dmSansFont.variable, 'font-dm_sans')}>
			<body suppressHydrationWarning className={'scroll-smooth antialiased'}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
